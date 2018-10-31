

const program = require("commander")
const app = require("./fun")

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
    .command('build')
    .description('output project')
    .action(function (cmd) {
        app.compile()
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