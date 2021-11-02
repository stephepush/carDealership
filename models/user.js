const db = require('./database');

module.exports = class User {
    constructor(
        id, email, username, hash, salt,
        person_id, person_img, dob, gender,
        newsletter, is_active
    ) {
        this.id = id;
        this.email = email;
        this.username = username;
        //this.hash = hash;
        //this.salt = salt;
        this.person_id = person_id;
        this.person_img = person_img;
        this.dob = dob;
        this.gender = gender;
        this.newsletter = newsletter;
        this.is_active = is_active
    }

    save() {
        let pk;

        return db.getConnection()

        .then((db) => {
                return db.query('START TRANSACTION');
            })
            .then(() => {
                const user_insert = db.query('INSERT INTO users (email, username, hash, salt) VALUES (?,?,?,?)', [this.email, this.username, this.hash, this.salt]);
                return user_insert;
            })
            .then((user_insert) => {
                console.log(Object.entries(user_insert))
                console.log(user_insert[0]['insertId'])
                pk = user_insert[0]['insertId']
            })
            .then(() => {
                db.query('INSERT INTO persons (person_img, dob, gender, newsletter) VALUES(?,?,?,?,)', [this.person_img, this.dob, this.gender, this.newsletter])
            })
            .then(() => {
                return db.query('COMMIT');
            })
            .catch((error) => {
                return db.query('ROLLBACK')
            })
    }


}