#!/usr/bin/env node

var program = require('commander');
var pjson = require('./package.json');


program
    .version(pjson.version)
    .description('Version: ' + pjson.version'. ' +  pjson.description)
    .usage('[options] app-name')
    .arguments('<app>')
    .option('-u, --user [username]', 'User you want to grant permissions to. Defaults to current logged-in user.')
    .action(function (app) {
        // body...
        console.log(app)
    })
    .parse(process.argv);

