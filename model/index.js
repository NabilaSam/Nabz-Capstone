// let db = require('../config');

// let {hash, compare, hashSync} = require('bcrypt');

// let {createJWT} = require('../middleware/AuthenticatedUser');

// class User{
//     login(req, res) {
//         const {emailAdd, userPass} = req.body;
//         const strQry =
//         `
//         SELECT *
//         FROM Users
//         WHERE emailAdd = ${emailAdd};
//         `;
//         db.query(strQry, async(err, data)=>{
//             if(err) throw err;
//             if((!data) || (data == null)){
//                 res.status(401).json({err: "You provided a wrong email address"});
//             }else{
//                 await compare(userPass, data[0].userPass,
//                 (cErr, cResult)=>{
//                     if(cErr) throw cErr;

//                     const jwToken = createJWT({
//                         emailAdd, userPass
//                     });

//                     request.cookie('LegitUser', jwToken, {
//                         maxAge: 3600000,
//                         httpOnly: true
//                     })
//                     if(cResult){
//                         request.status(200).json({
//                             msg: "Logged in",
//                             jwToken,
//                             result: data[0]
//                         })
//                     }else{
//                         request.status(401).json({
//                             err: "You entered an invalid password or did not register."
//                         })
//                     }
//                 })
//             }
//         })
//     }
//     fetchUsers(req, res){
//         const strQry =
//         `
//         SELECT *
//         FROM Users;
//         `
//         db.query(strQry, (err, data)=>{
//             if(err) throw err;
//             else res.status(200).json({results: data})
//         })
//     }
//     fetchUser(req, res){
//         const strQry =
//         `
//         SELECT *
//         FROM Users
//         WHERE UserID = ?;
//         `;
//         db.query(strQry,[req.params.id], (err, data)=>{
//             if(err) throw err;
//             else res.status(200).json({result: data})
//         })
//     }
//     async createUser(req, res){
//         let detail = req.body;
//         detail.userPass = await
//         hash(detail.userPass, 15);
//         let user = {
//             emailAdd: detail.emailAdd,
//             userPass: detail.userPass
//         }
//         const strQry =
//         `
//         INSERT INTO Users
//         SET ?;
//         `;
//         db.query(strQry, [detail], (err)=>{
//             if(err) {
//                 res.status(401).json({err});
//             }else{
//                 const jwToken = createJWT(user);
//                 res.cookie("LegitUser", jwToken, {
//                     maxAge: 3600000,
//                     httpOnly: true
//                 });
//                 res.status(200).json({msg: "A user record was saved."})
//             }
//         })
//     }
//     updateUser(req, res){
//         let data = req.body;
//         if(data.userPass !== null ||
//             data.userPass !== undefined)
//             data.userPass = hashSync(data.userPass, 15);
//         const strQry = 
//         `
//         UPDATE Users
//         SET ?
//         WHERE userID = ?;
//         `;
//         db.query(strQry, [data, req.params.id],
//             (err)=>{
//                 if(err) throw err;
//                 res.status(200).json( { msg: "A row was affected"})
//             })
//     }
//     deleteUser(req, res){
//         const strQry = 
//         `
//         DELETE FROM Users
//         WHERE userID = ?;
//         `;
//         db.query(strQry, [req.params.id],
//             (err)=>{
//                 if(err) throw err;
//                 res.status(200).json( {msg: "A record was removed from a database"})
//             })
//     }
// }

// class Product {
//     fetchProducts(req, res){
//         const strQry = 
//         `
//         SELECT *
//         FROM Products;
//         `;
//         db.query(strQry, (err, results)=>{
//             if(err) throw err;
//             res.status(200).json({results: results})
//         });
//     }
//     fetchProduct(req, res) {
//         const strQry = 
//         `
//         SELECT *
//         FROM Products
//         WHERE prodID = ?;
//         `;
//         db.query(strQry, [req.params.id], (err, results)=>{
//             if(err) throw err;
//             res.status(200).json({results: results})
//         });
//     }
//     addProduct(req, res) {

//         const strQry = 
//         `
//         INSERT INTO Products
//         SET ?;
//         `;
//         db.query(strQry, [req.body],
//             (err)=>{
//                 if(err){
//                     res.status(400).json({err});
//                 }else{
//                     res.status(200).json({msg: "Product saved"})
//                 }
//             });
//     }     
//     updateProduct(req, res){
//         const strQry = 
//         `
//         UPDATE Products
//         SET ?
//         WHERE prodID = ?;
//         `;
//         db.query(strQry, [req.body, req.params.id],
//             (err)=>{
//                 if(err){
//                     res.status(400).json({err: "Unable to update a record."});
//                 }else{
//                     res.status(200).json({msg: "Product updated"});
//                 }
//             });
//     }
//     deleteProduct(req, res){
//         const strQry = 
//         `
//         DELETE FROM Products
//         WHERE prodID = ?;
//         `;
//         db.query(strQry, [req.params.id],
//             (err)=>{
//                 if(err) throw err;
//                 res.status(200).json( {msg: "A record was removed from a database"})
//             })
//     }

// }

// module.exports = {User, Product}

const db = require('../config');

const {
    hash,
    compare,
    hashSync
} = require('bcrypt');

const {
    createToken
} = require('../middleware/AuthenticatedUser.js');

class User {
    login(req, res) {
        const {
            emailAdd,
            password
        } = req.body;
        const verifyQuery = `select userID, firstName, lastName, cellphoneNumber, emailAdd, userPass,userRole, userProfile FROM Users where emailAdd = '${emailAdd}';`;

        db.query(verifyQuery, async (err, data) => {
            const userLog = data;
            if (err) throw err, console.log(err);
            if ((!data) || (data == null)) {
                res.status(401).json({
                    err: 'You entered the wrong email address'
                })
            } else {
                await compare(password, data[0].password, (cErr, cResult) => {
                    if (cErr) throw cErr, console.log(cErr);

                    const jwToken = createToken({
                        emailAdd,
                        password
                    });
                    if (cResult) {
                        res.status(200).json({
                            msg: 'Logged In',
                            jwToken,
                            result: data
                        })
                    } else {
                        res.status(401).json({
                            err: 'You entered an invalid password or have not registered.'
                        });
                    };
                });
            };
        });
    };
    fetchUsers(req, res) {
        const fetchAllUsersQuery = `select firstName, lastName, cellphoneNumber, emailAdd, userPass,userRole, userProfile FROM Users;`;

        db.query(fetchAllUsersQuery, (err, data) => {
            if (err) throw err, console.log(err);
            else res.status(200).json({
                results: data
            });
        });
    };
    fetchUser(req, res) {
        const fetchUserQuery = `select userID, firstName, lastName, cellphoneNumber, emailAdd, userPass,userRole, userProfile FROM Users where userID = ?;`;

        db.query(fetchUserQuery, [req.params.id], (err, data) => {
            if (err) throw (err, console.log(err));
            else res.status(200).json({
                results: data
            });
        });
    };
    async createUser(req, res) {
        const detail = req.body;

        detail.userPass = await hash(detail.userPass, 15);

        const user = {
            emailAdd: detail.emailAdd,
            userPass: detail.userPass
        }

        const createQuery = `INSERT INTO Users SET ?;`;

        db.query(createQuery, [detail], (err) => {
            if (err) {
                res.status(401).json({
                    err
                });
            } else {
                const jwToken = createToken(user);

                res.cookie('UserFoundInDatabase', jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({
                    msg: 'A user record was saved.'
                });
            };
        });
    };
    updateUser(req, res) {
        const data = req.body;
        if (data.userPass !== null || data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);

        const updateQuery = `UPDATE Users SET ? WHERE userID = ?;`;

        db.query(updateQuery, [data, req.params.id], (err) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                msg: 'A row was affected.'
            });
        });
    };
    deleteUser(req, res) {
        const deleteQuery = `DELETE FROM Users WHERE userID = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                msg: 'A record was removed from a database'
            });
        });
    };
};


class Product {
    fetchProducts(req, res) {
        const fetchAllProducts = `SELECT prodId, prodName, prodDescription, category, price, imgURL FROM Products;`;

        db.query(fetchAllProducts, (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    fetchProduct(req, res) {
        const fetchProductQuery = `SELECT prodId, prodName, prodDescription, category, price, imgURL FROM Products WHERE id = ?;`;

        db.query(fetchProductQuery, [req.params.id], (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    addProduct(req, res) {
        const addProductQuery = `INSERT INTO Products SET ?;`;

        db.query(addProductQuery, [req.body], (err) => {
            if (err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                }), console.log(err);;
            } else {
                res.status(200).json({
                    msg: 'Product saved'
                });
            };
        });
    };
    updateProduct(req, res) {
        const updateQuery = `UPDATE Products SET ? WHERE prodId = ?;`;

        db.query(updateQuery, [req.body, req.params.id], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Product updated'
                });
            };
        });
    }
    deleteProduct(req, res) {
        const deleteQuery = `DELETE FROM Products WHERE prodId = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'A product was deleted'
            });
        });
    };
};

module.exports = {
    User,
    Product
};