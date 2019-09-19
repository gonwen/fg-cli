"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        type: 'input',
        name: 'author',
        message: '请输入姓名或邮箱',
        default: ''
    },
    {
        type: 'input',
        name: 'name',
        message: '请输入项目名称<默认为：new-nuxt-template>',
        default: 'new-nuxt-template'
    },
    {
        type: 'input',
        name: 'desc',
        message: '请输入项目描述',
        default: 'this is new nuxt-template project'
    },
    {
        type: 'input',
        name: 'port',
        message: '请输入项目端口号<默认为：3080>',
        validate: str => /^\d+$/.test(str),
        default: '3080'
    },
    {
        type: 'rawlist',
        name: 'ptype',
        message: '请选择需要创建的项目类型<默认为：nuxt>',
        choices: ['nuxt', 'vue', 'vue-admin'],
        default: 'nuxt'
    }
];
