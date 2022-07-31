const db = require('./database');

module.exports = class User {
    constructor(
        id, email, username, hash, isAdmin,
        dob, newsletter, person_id, person_img, is_active
    ) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.hash = hash;
        //this.salt = salt;
        this.isAdmin = 0; //changeable from db or maybe admin backend
        this.dob = dob;
        this.newsletter = newsletter;
        this.person_id = person_id;
        this.person_img = person_img;
        //this.gender = gender;

        this.is_active = 1
    }

    static findAll() {
        return db.query(
            "SELECT * FROM users"
        )
    };

    static findOne(email) {
        //console.log(username + " from line 25 database.js")
        return db.query(
            "SELECT * FROM users WHERE email = ?", [email]
        )
    };

    static findById(id) {
        return db.execute(
            "SELECT user_id, username, hash FROM users WHERE user_id = ?", [id]
        )
    };

    async save() {
        let pk;

        return db.getConnection()

        .then((db) => {
                return db.query('START TRANSACTION');
            })
            .then(() => {
                const user_insert = db.query('INSERT INTO users (email, username, hash) VALUES (?,?,?)', [this.email, this.username, this.hash]);
                return user_insert;
            })
            .then((user_insert) => {
                console.log(Object.entries(user_insert))
                console.log(user_insert[0]['insertId'])
                pk = user_insert[0]['insertId']
            })
            .then(() => {
                db.query('INSERT INTO persons ( dob, newsletter) VALUES(?,?)', [this.dob, this.newsletter])
            })
            .then(() => {
                return db.query('COMMIT');
            })
            .catch((error) => {
                console.log(error)
                return db.query('ROLLBACK')
            })
    }


}