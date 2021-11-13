const bcrypt = require('bcryptjs');

async function hashPassword(userPassword) {
    const password = userPassword;
    const saltRounds = 15;

    let hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword


}



module.exports.hashPassword = hashPassword;