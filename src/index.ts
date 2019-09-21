#! /usr/bin/env node
import program from 'commander'
import path from 'path'
import inquirer from './inquirer/index'
import downLoad from './source'
import {log, chalk} from './log'
const packageConfig = require('../package.json')

import read from './file/read'

const init = async () => {
    let sign = ''
    let params = {}
    await inquirer().then(json => {
        if (json && json.ptype) {
            sign = json.ptype || 'nuxt'
            params = json
        }
    })
    let res = null
    if (sign) res = await downLoad(sign)
    if (res) read(params)
}

program
    .version(packageConfig.version, '-v, --version')
    .option('-init', 'create a FE project')
program.command('init (template)')
    .description("创建新新项目")
    .alias('i')
    .action(() => {
        init()
    })
program.parse(process.argv)
if(program.args.length==0){
    // help info -h -*
    program.help();
}
