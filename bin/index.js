#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const index_1 = __importDefault(require("./inquirer/index"));
const source_1 = __importDefault(require("./source"));
const packageConfig = require('../package.json');
const read_1 = __importDefault(require("./file/read"));
const init = () => __awaiter(this, void 0, void 0, function* () {
    let sign = '';
    let params = {};
    yield index_1.default().then(json => {
        if (json && json.ptype) {
            sign = json.ptype || 'nuxt';
            params = json;
        }
    });
    let res = null;
    if (sign)
        res = yield source_1.default(sign);
    if (res)
        read_1.default(params);
});
commander_1.default
    .version(packageConfig.version, '-v, --version')
    .option('-init', 'create a FE project');
commander_1.default.command('init (template)')
    .description("创建新新项目")
    .alias('i')
    .action(() => {
    init();
});
commander_1.default.parse(process.argv);
if (commander_1.default.args.length == 0) {
    //这里是处理默认没有输入参数或者命令的时候，显示help信息
    commander_1.default.help();
}
