const ethers = require('ethers')

const toHex = (val) => {
    return ethers.toBeHex(val)
}

module.exports = {
    toHex
}