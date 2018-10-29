#! /usr/bin/env node

const program = require("commander")
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const path = require('path')
let rootName = path.basename(process.cwd())  // * 默认项目名为根目录

const app = {};  // * 命令相应操作方法对象
const c_opt = {}; // * 建立项目用户交互结果对象
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
                console.log(c_opt)
            });
        });
    });
}



/**
 * todo 命令定义
 */

program
    .version('0.0.1')
    .option('-C, --chdir <path>', 'change the working directory')
    .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
    .option('-T, --no-tests', 'ignore test hook')

program
    .command('init [name]')
    .description('create project')
    .action(function (name) {
        app.init(name)
    });
program
    .command('exec <cmd>')
    .description('run the given remote command')
    .action(function (cmd) {
        console.log('exec "%s"', cmd);
    });

program
    .command('teardown <dir> [otherDirs...]')
    .description('run teardown commands')
    .action(function (dir, otherDirs) {
        console.log('dir "%s"', dir);
        if (otherDirs) {
            otherDirs.forEach(function (oDir) {
                console.log('dir "%s"', oDir);
            });
        }
    });

program
    .command('*')
    .description('deploy the given env')
    .action(function (env) {
        console.log('deploying "%s"', env);
    });

program.parse(process.argv);