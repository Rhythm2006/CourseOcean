
function createCoursesRoutes(app) {

    app.post("/course/purchase", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })

    app.get("/courses/preview", function (req, res) {
        res.json({
            msg: "Endpoint"
        })
    })
}

module.exports = {
    createCoursesRoutes: createCoursesRoutes
}