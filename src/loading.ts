import readline from 'readline'
export default {
    timer: null,
    start (dec) {
        let P = ['\\', '|', '/', '-']
        let x = 0
        this.timer = setInterval(() => {
            readline.clearLine(process.stdout, 0)
            readline.cursorTo(process.stdout, 0, 0)
            process.stdout.write('\n' + P[x++] + '...' + dec + '\n')
            x &= 3
        }, 250)
        return this.timer
    },
    close () {
        clearInterval(this.timer)
    }
}
