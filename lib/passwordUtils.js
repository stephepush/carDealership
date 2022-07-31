const bcrypt = require('bcryptjs');

async function hashPassword(userPassword) {
    const password = userPassword;
    const saltRounds = 15;

    let hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
    //bcryptjs handles and stores the salt
    /*...Thus, the salt is automatically included in the output string which means there is no need to add it by yourself.*/ 

}


async function validatesPassword(passwordInput, dbHash) {
    let comparedInput = await bcrypt.compare(passwordInput, dbHash)

    console.log("this is whats returned from comparedInput: " + comparedInput)
    return comparedInput;
}


module.exports.hashPassword = hashPassword;
module.exports.validatesPassword = validatesPassword;