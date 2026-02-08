const { Router } = require("express");
const usersRouter = Router();
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwt = require("jsonwebtoken")
const { userModel } = require("../db");
const dotenv = require("dotenv")
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET;


    usersRouter.post("/signup", async function (req, res) {
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

            await userModel.create({
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

    usersRouter.post("/signin", async function (req, res) {
        const email = req.body.email;
        const password = req.body.password;

        const user = await userModel.findOne({
            email: email
        })
        if(!user){
            res.status(403).message({
                message: "User doesnt exist"
            })
            return
        } 

        

        const passwordMatch = await bcrypt.compare(password,user.password)

        if(passwordMatch){
            const token = jwt.sign({
                userId: user._id.toString()
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
    usersRouter.get("/purchases", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })


module.exports= {
    usersRouter: usersRouter
}