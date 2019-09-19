import fs from 'fs'
import nuxtTpl from '../template/nuxt.config.tpl'
import vueTpl from '../template/vue.index.tpl'
import readmeTpl from '../template/readme.tpl'
export default (param) => {
    let base = process.cwd() + '/'
    // package
    let packageurl = base + 'package.json'
    fs.readFile(packageurl, 'utf8', (err, data) => {
        let json = JSON.parse(data)
        if (param.name) json.name = param.name
        if (param.desc) json.description = param.desc
        if (param.author) json.author = param.author
        if (param.port && json.nuxt) json.nuxt.port = param.port
        json.version = '1.0.0'
        let packagedata = JSON.stringify(json, null, 4);
        fs.writeFile(packageurl, packagedata, 'utf8', (err) => {
            if (err) throw err
            else console.log('success done')
        })
    })
    // nuxt config
    let nuxtconf = nuxtTpl(param)
    let nuxturl = base + 'nuxt.config.js'
    fs.writeFile(nuxturl, nuxtconf, 'utf8', (err) => {
        if (err) throw err
        else console.log('success done')
    })
    // vue index
    let vueindex = vueTpl(param)
    let vueurl = base + 'pages/index.vue'
    fs.writeFile(vueurl, vueindex, 'utf8', (err) => {
        if (err) throw err
        else console.log('success done')
    })
    // readme
    let readme = readmeTpl(param)
    let readmeurl = base + 'README.md'
    fs.writeFile(readmeurl, readme, 'utf8', (err) => {
        if (err) throw err
        else console.log('success done')
    })
}
