const express = require("express");

const studentRouter = express.Router();

const {addUserGameData} = require("../controllers/studentsController");

studentRouter.post("/addUserGameData", addUserGameData);

module.exports = studentRouter;