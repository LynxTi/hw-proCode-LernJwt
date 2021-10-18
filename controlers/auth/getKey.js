const path = require('path');
const fs = require('fs-extra');

let privKey = null;
let pubKey = null;

const getPrivateKey = async () => {
    if (!privKey) {
        const keyPath = path.join(__dirname, '../../keys/priv.key');
        console.log('keyPath: ', keyPath);
        privKey = await fs.readFile(keyPath, 'utf-8')
    }
    return privKey;
}

const getPublickKey = async () => {
    if (!pubKey) {
        const keyPath = path.join(__dirname, '../../keys/prub.key');
        console.log('keyPath: ', keyPath);
        pubKey = await fs.readFile(keyPath, 'utf-8')
    }
    return pubKey;
}

module.exports = {
    getPrivateKey,
    getPublickKey
}
