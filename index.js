const express = require("express");
const app = express();

const { createUsersRoute } = require("./user")
const { createCoursesRoutes } = require("./course")

app.listen(3000);
