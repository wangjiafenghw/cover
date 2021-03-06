const fs = require('fs-extra')
const inquirer = require('inquirer');
const ora = require('ora');
const path = require('path')
let rootName = path.basename(process.cwd())  // * 默认项目名为根目录
const c_operation = {}; // * 建立项目用户交互结果对象
const template = require("./template")   // * 工程文件模板内容
const spinner = {
    init: ora('创建工程...'),  // * loading动画
    build: ora('编译...')  // * 编译
}
//  方法引入
const wxGetWxml = require('../wx-get-wxml/index');
const wxGetWxss = require('../wx-get-wxss/index').main;
const wxDefWxss = require('../wx-get-wxss/index').def_wxss;

let cover = {};    //保存cover值
let config = {};   //配置信息


module.exports =  app = {};  // * 命令相应操作方法对象

/**
 * * 编译方法对象
 */
app.compile_fun = {
    'h5':{
        'wxapp':{
            html: 'wxGetWxml',
            style: 'wxGetWxss'
        },
        'react':{
            html: 'reactGetHtml'   // ! demodemo   react vue 都是不需要的， h5\wxapp\hybrid是目前的输出选型
        }
    }
}


/**
 * 
 * todo 获取wx代码
 * @param {funStr} 转换方法名
 * @param {inputPath} 源代码文件路径
 * @param {outputPath} 编译输出文件路径
 */
app.output = (inputPath, funStr, outputPath)=>{;
    new Promise((resolve, reject)=>{
        fs.readFile(inputPath, (err, data)=>{
            if(err) reject(err);
            resolve(data.toString())
        })
    }).then((str)=>{    //转换
        return new Promise((resolve, reject)=>{
            eval(funStr)(str, (res)=>{   //调用package的方法 如：wx-get-wxml  名为=>  wxGetWxml
                resolve(res)
            })
        })
    }).then((res)=>{    //检查文件是否存在
        return new Promise((resolve, reject)=>{
            fs.ensureFile(outputPath, err=>{
                if(err) reject(err);
                resolve(res)
            })
        })
    }).then((res)=>{   //输出
        return new Promise((resolve, reject)=>{
            fs.outputFile(outputPath, res, err=>{
                if(err) reject(err);
            })
        })
    }).catch((err)=>{
        throw err;
    })
}


/**
 * @param {callback} 获取config回调
 */
app.getConfigJson = (callback)=>{
    fs.readJson(`${process.cwd()}/cover.config.json`, (err, json) => {
        if (err){
            spinner.build.fail()
            console.log(`\nYou Can Try Use "cd <Tab> && <Enter>" To Solve This Trouble！\n\n`)
            throw err;
        }
        config = json   // todo 赋值到全局
        callback()
    })
}

/**
 * todo "编译", 文件输出
 */
app.compile = ()=>{
    spinner.build.start();
    
    app.getConfigJson(()=>{
        let output_format = {};
        for(let i=0;i<config.output_format.length;i++){
            output_format = app.compile_fun[config.input_format][config.output_format[i]];  //传递
            let platform = config.output_format[i];  //*当前输出的平台
            //*静态资源复制到项目
            fs.copy("./images", `./build/${platform}/images`)

            //*代码编译输出
            app.output( `${process.cwd()}/index.html`, output_format['html'], `${process.cwd()}/build/${platform}/pages/index/index.wxml` )  //输出html
            
        }
        spinner.build.succeed();
    })
}


/**
 * ? 逻辑逻辑！！！
 * * init操作方法
 * @param {name} 可选项目名
 */
app.init = (name)=>{
    rootName = name?name:rootName;
    inquirer.prompt([{type: 'string', name: 'name', message: `use name "${rootName}"?`, default: `${rootName}`}])
    .then(answers => {// todo 项目名
        if(typeof answers.name==="boolean") c_operation.name = pathName;
        else                                c_operation.name = answers.name
        inquirer.prompt([{type: 'list', name: 'input_format', message: `源码是在那个平台运行的?`, choices: ["h5", "wxapp", "vue", "react"],default: 0}])
        .then(answers => {// todo 入端格式
            c_operation.input_format = answers.input_format;
            inquirer.prompt([{type: 'checkbox', name: 'output_format', message: `输出哪些平台的工程?`, choices: ["h5", "wxapp", "vue", "react"]}])
            .then(answers => {// todo 输出端格式
                c_operation.output_format = answers.output_format;
                app.begin()  // todo 调用渲染
            });
        });
    });
}

/**
 * * 根据预设的入端代码结构初始化项目文件结构方法的对象
 * 
 */
app.createfolderfun = {
    '*': (path)=>{  
        // * 创建package.json
        fs.outputFile(`${path}/package.json`, c_operation.package, err => {
            if(err) throw err
            setTimeout(()=>{   // ? 输出太快有点low，这样逼格高一些
                spinner.init.succeed()
            }, 2000)
        })
        // * 创建cover.config.json
        let config = {'input_format': c_operation.input_format, 'output_format': c_operation.output_format}
        fs.outputJson(`${path}/cover.config.json`, config, (err)=>{
            if(err) throw err;
        })
        //*创建build文件夹
        fs.ensureDir(`${path}/build`, err=>{
            if(err) throw err;
        })
    },
    'h5': (path)=>{   // * 创建h5入端开发模板
        fs.outputFile(`${path}/index.html`, template.h5.html,(err)=>{
            if(err) throw err;
        })
        fs.outputFile(`${path}/style/style.css`, template.h5.style,(err)=>{
            if(err) throw err;
        })
        fs.outputFile(`${path}/js/index.js`, template.h5.script,(err)=>{
            if(err) throw err;
        })
        fs.copy(`${__dirname}/logo.png`, `${path}/images/logo.png`, err => {
            if(err) throw err;
        })         
        app.createfolderfun['*'](path)
    },
    'wxapp': (path)=>{
        fs.outputFile(`${path}/app.wxss`, wxDefWxss, err=>{
            if(err) throw err;
        })
    }
}


/**
 * todo 根据c_operation渲染项目模板  生成cover.config.js
 */
app.begin = ()=>{
    spinner.init.start();
        // ? package.json
        c_operation.package = `
{
    "name": "${c_operation.name}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
        "build": "cover-generator build"
    },
    "keywords": [],
    "author": {},
    "license": "MIT"
}`;


    app.createfolderfun[c_operation.input_format](`./${c_operation.name}`)  // * 入端
    // todo 测试输出  ----------------
    // fs.outputFile(`./${c_operation.name}/demo_c_operation.js`, JSON.stringify(c_operation), (err)=>{
    //     if(err) throw err;
    // })
    // todo END -----------------
    // * 输出端
    c_operation.output_format.forEach(item => {
        app.createfolderfun[item](`./${c_operation.name}/build/${item}`)
    });
}
