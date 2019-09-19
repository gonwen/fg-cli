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
const download_git_repo_1 = __importDefault(require("download-git-repo"));
const loading_1 = __importDefault(require("./loading"));
const log_1 = require("./log");
const packageConfig = require('../package.json');
exports.default = (sign) => __awaiter(this, void 0, void 0, function* () {
    let url = packageConfig.resources[sign];
    let flag = false;
    if (url) {
        const download = () => new Promise((resolve) => {
            loading_1.default.start('loading source from: ' + url);
            download_git_repo_1.default(url, process.cwd(), (err) => {
                let msg = '';
                if (err)
                    msg = log_1.chalk.red('[pull error] 源数据拉取失败');
                else {
                    msg = log_1.chalk.green('[pull success] 源数据拉取成功');
                    flag = true;
                }
                log_1.log(msg);
                loading_1.default.close();
                resolve(!err);
            });
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
        });
        yield download();
    }
    return flag;
});
