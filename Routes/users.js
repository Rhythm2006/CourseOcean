const { Router } = require("express");
const usersRouter = Router();
    usersRouter.post("/signup", function (req, res) {
        res.json({
            mesg: "Endpoint"
        })
    })

    usersRouter.post("/signin", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })
    usersRouter.get("/purchases", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })


module.exports= {
    usersRouter: usersRouter
}