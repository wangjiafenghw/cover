#! /usr/bin/env node

const program = require("commander")
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const path = require('path')
let rootName = path.basename(process.cwd())  // * 默认项目名为根目录
const app = require('fun')

const c_opt = {}; // * 建立项目用户交互结果对象

module.exports = program



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