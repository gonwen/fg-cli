// set template file
import fs from 'fs'

export default (pm, fu, fn) => {
    let content = fn(pm)
    let url = fu
    fs.writeFile(url, content, 'utf8', (err) => {
        if (err) throw err
        else console.log('success done')
    })
}
