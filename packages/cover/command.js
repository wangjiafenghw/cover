#! /usr/bin/env node

const program = require("commander")
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');

const app = {};
/**
 * ? 逻辑逻辑！！！
 * * init操作方法
 */
app.init = (name)=>{
    if(name){
        inquirer.prompt([{type: 'confirm', name: 'OK', message: `use name ${name}?`, default: true}]).then(answers => {
            console.log(answers);
        });
    }else{

    }
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