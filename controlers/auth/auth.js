const getKey = require('./getKey');
const jwt = require('jsonwebtoken');
const jws = require('jws');

const userModel = require('../../models/user');

const login = async (login, password) => {
    const doc = await userModel.findOne({name: login});
    // Проверка на наличия Юзера с таким логином
    if (!doc) {
        return {status: 'Unknow user'};
    }

    const chekPasword = doc.verificationPassword(password);
    
    // Проверка пароля
    if (!chekPasword) {
        return {status: 'invalid password'}
    }
    const payload = {login: doc.name, id: doc.id}
    console.log('payload: ', payload);
    const token = await createAcesToken(payload);
    
    return {status: 'logged in' , token}
}

const createAcesToken = async (payload) => {
    const privKey = await getKey.getPrivateKey();

    const token = await jwt.sign(payload, privKey, {algorithm: 'RS256'});

    return token;
}

const chekAndDecode = async (token) => {
    const pubKey = await getKey.getPublickKey();
    const rezalt = await jws.verify(token, pubKey, {algorithms: ['RS256']});

    return rezalt;
}

module.exports = {
    login, 
    chekAndDecode
};