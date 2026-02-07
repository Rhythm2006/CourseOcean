const { Router } = require("express");
const adminRouter = Router()
const { adminModel } = require("../db");
    adminRouter.post("/signup", function (req, res) {
        res.json({
            mesg: "Endpoint"
        })
    })

    adminRouter.post("/signin", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })
    adminRouter.post("/courses", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })
    adminRouter.put("/courses", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })
    adminRouter.get("/courses/bulk", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })

    module.exports = {
        adminRouter: adminRouter
    }
    

