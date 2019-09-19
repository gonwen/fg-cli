"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const nuxt_config_tpl_1 = __importDefault(require("../template/nuxt.config.tpl"));
const vue_index_tpl_1 = __importDefault(require("../template/vue.index.tpl"));
const readme_tpl_1 = __importDefault(require("../template/readme.tpl"));
exports.default = (param) => {
    let base = process.cwd() + '/';
    // package
    let packageurl = base + 'package.json';
    fs_1.default.readFile(packageurl, 'utf8', (err, data) => {
        let json = JSON.parse(data);
        if (param.name)
            json.name = param.name;
        if (param.desc)
            json.description = param.desc;
        if (param.author)
            json.author = param.author;
        if (param.port && json.nuxt)
            json.nuxt.port = param.port;
        json.version = '1.0.0';
        let packagedata = JSON.stringify(json, null, 4);
        fs_1.default.writeFile(packageurl, packagedata, 'utf8', (err) => {
            if (err)
                throw err;
            else
                console.log('success done');
        });
    });
    // nuxt config
    let nuxtconf = nuxt_config_tpl_1.default(param);
    let nuxturl = base + 'nuxt.config.js';
    fs_1.default.writeFile(nuxturl, nuxtconf, 'utf8', (err) => {
        if (err)
            throw err;
        else
            console.log('success done');
    });
    // vue index
    let vueindex = vue_index_tpl_1.default(param);
    let vueurl = base + 'pages/index.vue';
    fs_1.default.writeFile(vueurl, vueindex, 'utf8', (err) => {
        if (err)
            throw err;
        else
            console.log('success done');
    });
    // readme
    let readme = readme_tpl_1.default(param);
    let readmeurl = base + 'README.md';
    fs_1.default.writeFile(readmeurl, readme, 'utf8', (err) => {
        if (err)
            throw err;
        else
            console.log('success done');
    });
};
