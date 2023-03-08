const sql = require('../config');
const bcrypt = require('bcrypt');
const {createJWT} = require('../middleware/AuthenticatedUser')

class user{
    login(data, result){
        const {emailAdd, userPass} = data;
        sql.query(`SELECT firstName, lastName,emailAdd, userPass, userRole, userProfile, joinDate FROM users WHERE emailAdd =?`, [email])
    }
}