
const { Router } = require("express")
const coursesRouter = Router()

    coursesRouter.post("/courses/purchase", function (req, res) {
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