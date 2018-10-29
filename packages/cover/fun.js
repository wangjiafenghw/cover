
module.exports =  app = {};  // * 命令相应操作方法对象
/**
 * ? 逻辑逻辑！！！
 * * init操作方法
 */
app.init = (name)=>{
    rootName = name?name:rootName;
    inquirer.prompt([{type: 'string', name: 'name', message: `use name "${rootName}"?`, default: `${rootName}`}])
    .then(answers => {// todo 项目名
        if(typeof answers.name==="boolean") c_opt.name = pathName;
        else                                c_opt.name = answers.name
        inquirer.prompt([{type: 'list', name: 'input_format', message: `源码是在那个平台运行的?`, choices: ["h5", "微信小程序", "vue", "react"],default: 0}])
        .then(answers => {// todo 入端格式
            c_opt.input_format = answers.input_format;
            inquirer.prompt([{type: 'checkbox', name: 'output_format', message: `输出哪些平台的工程?`, choices: ["h5", "微信小程序", "vue", "react"]}])
            .then(answers => {// todo 输出端格式
                c_opt.output_format = answers.output_format;
            });
        });
    });
}