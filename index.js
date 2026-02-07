const express = require("express");
const app = express();
const mongoose = require("mongoose")

const { usersRouter } = require("./Routes/users")
const { coursesRouter } = require("./Routes/course");
const { adminRouter } = require("./Routes/admin");

app.use("/api/v1/user", usersRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", coursesRouter);

mongoose.connect("mongodb+srv://rhythsanjeev2006_db_user:dFFjwX46YIbQpaik@cluster0.hvhmjgb.mongodb.net/courselake").then(()=>{
    app.listen(3000,()=>{
        console.log("Backend's running!")
    })
}).catch((err)=>{
    console.log("Theres an error connecting to the database")
})






 