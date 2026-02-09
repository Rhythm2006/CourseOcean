const { userMiddleware } = require("../middleware/user");
const { purchaseModel } = require("../db"); 
const { courseModel } = require("../db");

const { Router } = require("express")
const coursesRouter = Router()

    coursesRouter.post("/purchase",userMiddleware,async function (req, res) {
        const userId = req.userId;
        const courseId = req.body.courseId;
        // should check whether the user has paid the price, ignoring currently.
        await purchaseModel.create({
            userId,
            courseId
        })

        res.json({
            msg: "You have successfully bought the course!"
        })
    })

    coursesRouter.get("/preview", async function (req, res) {
        const courses = await courseModel.find({});

        res.json({
            courses
        })
    })


module.exports = {
    coursesRouter: coursesRouter
}