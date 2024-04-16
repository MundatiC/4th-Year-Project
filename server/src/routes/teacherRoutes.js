const express = require("express");

const teacherRouter = express.Router();

const teacherTokenValidation = require("../middlewares/teacherTokenValidation");

const {changeGameSettings, getGameSettings, searchStudents, getUserGamesByUserID, sendMailM} = require("../controllers/teacherControllers");

teacherRouter.post("/changeGameSettings", changeGameSettings);

teacherRouter.get("/getGameSettings", teacherTokenValidation, getGameSettings);

teacherRouter.post("/search", searchStudents);

teacherRouter.post("/gameData", getUserGamesByUserID)

teacherRouter.post("/sendMail",teacherTokenValidation, sendMailM);

module.exports = teacherRouter;