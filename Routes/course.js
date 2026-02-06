
const { Router } = require("express")
const coursesRouter = Router()

    coursesRouter.post("/course/purchase", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })

    coursesRouter.get("/courses/preview", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })


module.exports = {
    coursesRouter: coursesRouter
}