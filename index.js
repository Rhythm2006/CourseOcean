const express = require("express");
const app = express();

const  { usersRouter } = require("./Routes/users")
const { coursesRouter } = require("./Routes/course"); 
const {adminRouter } = require("./admin");

app.use("/api/v1/user",usersRouter);
app.use("/api/v1/course",coursesRouter);




app.listen(3000); 