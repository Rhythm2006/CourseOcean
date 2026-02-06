const express = require("express");
const app = express();

const  { usersRouter } = require("./Routes/users")
const { coursesRouter } = require("./Routes/course"); 


app.listen(3000); 