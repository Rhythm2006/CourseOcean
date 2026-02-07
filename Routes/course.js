
const { Router } = require("express")
const coursesRouter = Router()

    coursesRouter.post("/purchase", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })

    coursesRouter.get("/preview", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })


module.exports = {
    coursesRouter: coursesRouter
}