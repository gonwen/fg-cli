import fs from 'fs'
import nuxtTpl from '../template/nuxt.config.tpl'
import vueTpl from '../template/vue.index.tpl'
import readmeTpl from '../template/readme.tpl'
import indexHtmlTpl from '../template/index.html.tpl'
import vueConfigTpl from '../template/vue.config.tpl'
import vueRouterTpl from '../template/vue.router.tpl'
import writeTplFile from './write.tpl.file'

export default (param) => {
    let base = process.cwd() + '/'
    // package
    let packageurl = base + 'package.json'
    fs.readFile(packageurl, 'utf8', (err, data) => {
        let json = JSON.parse(data)
        if (param.name) json.name = param.name
        if (param.desc) json.description = param.desc
        if (param.author) json.author = param.author
        if (param.port && json.config && json.config.nuxt) json.config.nuxt.port = param.port
        json.version = '1.0.0'
        let packagedata = JSON.stringify(json, null, 4)
        fs.writeFile(packageurl, packagedata, 'utf8', (err) => {
            if (err) throw err
            else console.log('success done')
        })
    })
    // readme
    writeTplFile(param, base + 'README.md', readmeTpl)
    if (param.ptype === 'nuxt') {
        writeTplFile(param, base + 'nuxt.config.js', nuxtTpl)
        writeTplFile(param, base + 'pages/index.vue', vueTpl)
    } else {
        writeTplFile(param, base + 'index.html', indexHtmlTpl)
        writeTplFile(param, base + 'config/index.js', vueConfigTpl)
        writeTplFile(param, base + 'src/router/index.js', vueRouterTpl)
        writeTplFile(param, base + 'src/components/page/index.vue', vueTpl)
    }
}
