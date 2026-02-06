
function createUsersRoute(app) {
    app.post("/user/signup", function (req, res) {
        res.json({
            mesg: "Endpoint"
        })
    })

    app.post("/user/signin", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })
    app.get("/user/purchases", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })
}

module.exports={
    createUsersRoute: createUsersRoute
}