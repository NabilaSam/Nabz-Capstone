require('dotenv').config();
const {sign, verify} = require('jsonwebtoken');

function createToken(user){
    return jwt.sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1Hour'
    });
};

function verifyToken(req, res,next){
    try{
        const token = req.cookies["LegitimateUser"] !== null?
        req.cookies["LegitimateUser"]: "Please Register Yourself!";
        const isValid = null;
        if(token !== "Please Register Yourself!"){
            isValid = verify(token, process.env.SECRET_KEY);
            if(isValid){
                req.authenticated = true;
                next();
            } else{
                res.status(400).json({err: "Please Register Yourself!"})
            }
        }else {
            res.status(400).json({err: "Please Register Yourself!"})
        }
    } catch(error){
        res.status(400).json({err: error.message})
    }
};

module.exports = {createToken, verifyToken};