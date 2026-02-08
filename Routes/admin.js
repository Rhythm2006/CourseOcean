const { Router } = require("express");
const adminRouter = Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { adminModel } = require("../db");
const { courseModel } = require("../db")
const { z } = require("zod");
const dotenv = require("dotenv");
dotenv.config();
const { adminMiddleware } = require("../middleware/admin");
const JWT_SECRET = process.env.JWT_SECRET_ADMIN;
    adminRouter.post("/signup", async function (req, res) {
        const requiredBody = z.object({
                    email: z.string().email(),
                    password: z.string().min(3).max(50),
                    firstName: z.string().min(3).max(50),
                    lastName: z.string().min(3).max(50)
                })
        
                const parsedDataWithSuccess = requiredBody.safeParse(req.body);
                
                if(!parsedDataWithSuccess.success){
                    res.json({
                        message: "Invalid format",
                        error: parsedDataWithSuccess.error
                    })
                    return;
                }
        
                const email = req.body.email;
                const password = req.body.password;
                const firstName = req.body.firstName;
                const lastName = req.body.lastName;
        
                try{
                    const hashedPassword = await bcrypt.hash(password,5);
        
                    await adminModel.create({
                        email: email,
                        password: hashedPassword,
                        firstName: firstName,
                        lastName: lastName
                    })
        
                    res.json({
                        message: "You're logged in!"
                    })
                } catch(e){
                    res.json({
                        message:"Theres an error storing your data",
                        error: e
                    })
                }
        
    })

    adminRouter.post("/signin", async function (req, res) {
        const email = req.body.email;
                const passsword = req.body.password;
        
                const admin = await adminModel.findOne({
                    email: email
                })
                if(!admin){
                    res.status(403).message({
                        message: "Admin doesnt exist"
                    })
                    return
                } 
        
                const passwordMatch = await bcrypt.compare(passsword,admin.password)
        
                if(passwordMatch){
                    const token = jwt.sign({
                        adminId: admin._id
                    },JWT_SECRET);
                    res.json({
                        message: `${token}`
                    })
                } else{
                    res.status(403).json({
                        message: "Incorrect credentials"
                    })
                }
    })
    adminRouter.post("/course",adminMiddleware, async function (req, res) {

        const adminId = req.adminId;
        const {title,description,imageUrl,price} = req.body;

        const course = await courseModel.create({
            title:title,
            description:description,
            imageUrl:imageUrl,
            price:price
        })

        res.json({
            message: "Course Created",
            courseId: course._id
        })
    })
    adminRouter.put("/course", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })
    adminRouter.get("/course/bulk", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })

    module.exports = {
        adminRouter: adminRouter
    }
    

