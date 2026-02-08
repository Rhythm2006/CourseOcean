const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const admin = require("../Routes/admin");
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET_ADMIN

function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_SECRET);

    if(decoded){
        req.adminId = decoded.adminId;
        next();
    } else{
        res.json({
            message: "Youre not signed in"
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}