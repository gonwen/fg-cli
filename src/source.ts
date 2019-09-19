import downLoadRepo from 'download-git-repo'
import loading from './loading'
import {log, chalk} from './log'
const packageConfig = require('../package.json')

export default async (sign) => {
    let url = packageConfig.resources[sign]
    let flag = false
    if (url) {
        const download = () => new Promise((resolve) => {
            loading.start('loading source from: ' + url)
            downLoadRepo(url, process.cwd(), (err) => {
                let msg = ''
                if (err) msg = chalk.red('[pull error] 源数据拉取失败')
                else {
                    msg = chalk.green('[pull success] 源数据拉取成功')
                    flag = true
                }
                log(msg)
                loading.close()
                resolve(!err)
            })
            /**
             * *****************************************************
             * TODO test data
             * */
            // setTimeout(() => {
            //     let err = false
            //     let msg = ''
            //     if (err) msg = chalk.red('[pull error] 源数据拉取失败')
            //     else {
            //         msg = chalk.green('[pull success] 源数据拉取成功')
            //         flag = true
            //     }
            //     log(msg)
            //     loading.close()
            //     resolve(!err)
            // }, 3000)
        })
        await download()
    }
    return flag
}
