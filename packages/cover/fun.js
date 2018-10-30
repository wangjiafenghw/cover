const fs = require('fs-extra')
const inquirer = require('inquirer');
const ora = require('ora');
const path = require('path')
let rootName = path.basename(process.cwd())  // * 默认项目名为根目录
const c_operation = {}; // * 建立项目用户交互结果对象
const template = require("./template")   // * 工程文件模板内容
const spinner = ora('创建工程...');  // * loading动画


module.exports =  app = {};  // * 命令相应操作方法对象
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
                app.render()  // todo 调用渲染
            });
        });
    });
}

/**
 * * 根据预设的入端代码结构初始化项目文件结构方法的对象
 */
app.createfolderfun = {
    '*': ()=>{  // * 创建package.json
        fs.outputFile(`./${c_operation.name}/package.json`, c_operation.package, err => {
            if(err) throw err
            setTimeout(()=>{   // ? 输出太快有点low，这样逼格高一些
                spinner.succeed()
            }, 2000)
        })
    },
    'h5': ()=>{   // * 创建h5入端开发模板
        fs.outputFile(`./${c_operation.name}/index.html`, template.h5.html,(err)=>{
            if(err) throw err;
        })
        fs.outputFile(`./${c_operation.name}/style/style.css`, template.h5.style,(err)=>{
            if(err) throw err;
        })
        fs.outputFile(`./${c_operation.name}/js/index.js`, template.h5.script,(err)=>{
            if(err) throw err;
        })
        fs.copy(`${__dirname}/logo.png`, `./${c_operation.name}/images/logo.png`, err => {
            if(err) throw err;
        }) 
        fs.ensureFile(`./${c_operation.name}/build`,(err)=>{
            if(err) throw err;
        })         
        app.createfolderfun['*']()
    }
}


/**
 * todo 根据c_operation渲染项目模板
 */
app.render = ()=>{
    spinner.start();
        // ? package.json
        c_operation.package = `
{
    "name": "${c_operation.name}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": {},
    "license": "MIT"
}`,
    app.createfolderfun[c_operation.input_format]()  // * 入端

}