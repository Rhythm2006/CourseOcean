const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json())

 
const { usersRouter } = require("./Routes/users")
const { coursesRouter } = require("./Routes/course");
const { adminRouter } = require("./Routes/admin");

app.use("/api/v1/user", usersRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", coursesRouter);

mongoose.connect(MONGO_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log("Backend's running!")
    })
}).catch((err)=>{
    console.log("Theres an error connecting to the database")
})








 