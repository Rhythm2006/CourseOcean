const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET_USER;

function userMiddleware(req,res,next){
    const token = req.headers.token
    const decoded = jwt.verify(token,JWT_SECRET);

    if(decoded){
        req.userId = decoded.userId;
        next();
    } else{
        res.json({
            message: "Youre not signed in."
        })
    }
}

module.exports = {
    userMiddleware:userMiddleware
}