"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
exports.default = {
    timer: null,
    start(dec) {
        let P = ['\\', '|', '/', '-'];
        let x = 0;
        this.timer = setInterval(() => {
            readline_1.default.clearLine(process.stdout, 0);
            readline_1.default.cursorTo(process.stdout, 0, 0);
            process.stdout.write('\n' + P[x++] + '...' + dec + '\n');
            x &= 3;
        }, 250);
        return this.timer;
    },
    close() {
        clearInterval(this.timer);
    }
};
