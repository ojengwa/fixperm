#!/usr/bin/env node

var fixperm = require('commander');
var pjson = require('./package.json');
var shell = require('shelljs');
var chalk = require('chalk');

fixperm
    .version(pjson.version)
    .description('Version: ' + pjson.version + '. ' + pjson.description)
    .usage('[options] app-name')
    .arguments('<app>')
    .option('-u, --user [username]', 'User you want to grant permissions to. Defaults to current logged-in user.')
    .action(function (app) {
        'use strict';
        if (app.toLowerCase() === 'npm') {
            shell.chown('-R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}');
        } else {
            var appPath = shell.which(app) || false;
            var command;
            var appPaths;

            if (!!appPath) {
                if (!!fixperm.username) {
                    command = 'chown ' + fixperm.username + ' ' + appPath;
                } else {
                    command = 'chown $(whoami) ' + appPath;
                }
                appPaths = shell.find('/').filter(function (file) {
                    // 'u+rwx';
                    return file.match(/\bapp\b/);
                });
                console.log(appPaths);
                shell.exec(command, function (code, stdout, stderr) {
                    if (!!stderr) {
                        chalk.red(
                            'Status Code: ' +
                            chalk.underline.red(code) +
                            '. ' + stderr
                        );
                    } else {
                        chalk.green(
                            'Status Code: ' +
                            chalk.underline.green(code) +
                            '. ' + stdout
                        );
                    }

                });
            } else {
                console.log('Cannot find ' + app + '. Are you sure it is installed?');
            }
        }
    })
    .parse(process.argv);

module.exports = fixperm;