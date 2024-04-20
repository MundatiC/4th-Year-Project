const express = require("express");

const teacherRouter = express.Router();

const teacherTokenValidation = require("../middlewares/teacherTokenValidation");

const {changeGameSettings, getGameSettings, searchStudents, getUserGamesByUserID, sendMailM} = require("../controllers/teacherControllers");

teacherRouter.post("/changeGameSettings", changeGameSettings);

teacherRouter.post("/getGameSettings", getGameSettings);

teacherRouter.post("/search", searchStudents);

teacherRouter.post("/gameData", getUserGamesByUserID)

teacherRouter.post("/sendMail", sendMailM);

module.exports = teacherRouter;