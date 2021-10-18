const userModel = require('../../models/user');

const createUser = async (login, password) => {
    const doc = await userModel.create({name: login, password: password});
    console.log('user Create: ', doc);
}

module.exports = createUser;