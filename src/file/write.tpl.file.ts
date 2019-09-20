// set template file
import fs from 'fs'

export default (param, fileurl, fn) => {
    let nuxtconf = fn(param)
    let nuxturl = fileurl
    fs.writeFile(nuxturl, nuxtconf, 'utf8', (err) => {
        if (err) throw err
        else console.log('success done')
    })
}
