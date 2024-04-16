const express = require("express");

const authRouter = express.Router();

const {registerUser, login, registerTeacher} = require("../controllers/authControllers");

const newUserMiddleware = require('../middlewares/newUserMiddleware');

authRouter.post("/register", newUserMiddleware,registerUser);

authRouter.post("/login", login);

authRouter.post("/registerTeacher", newUserMiddleware, registerTeacher);



module.exports = authRouter;
