const bcrypt = require('bcryptjs');

async function hashPassword(userPassword) {
    const password = userPassword;
    const saltRounds = 15;

    let hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword


}


async function validatesPassword(passwordInput, dbHash) {
    let comparedInput = await bcrypt.compare(passwordInput, dbHash)

    console.log("this is whats returned from comparedInput: " + comparedInput)
    return comparedInput;
}


module.exports.hashPassword = hashPassword;
module.exports.validatesPassword = validatesPassword