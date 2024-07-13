const {toHex } = require('package-hex')

const mulToHex = (val1, val2) => {
    return toHex(val1 * val2)
}

module.exports = {
    mulToHex
}