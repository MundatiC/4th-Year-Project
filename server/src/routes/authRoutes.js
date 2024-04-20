const express = require("express");

const authRouter = express.Router();

const {registerUser, loginStudents, loginTeacher, registerTeacher} = require("../controllers/authControllers");

const newUserMiddleware = require('../middlewares/newUserMiddleware');

authRouter.post("/register", newUserMiddleware,registerUser);

authRouter.post("/loginT", loginTeacher);
authRouter.post("/loginS", loginStudents);

authRouter.post("/registerTeacher", newUserMiddleware, registerTeacher);



module.exports = authRouter;
