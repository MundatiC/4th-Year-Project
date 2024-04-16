const joi = require("joi");

const newUserSchema = joi.object({
    username: joi.string().min(3).required(),
    email: joi.string().email().required(),
    userType: joi.string().valid('Student', 'Teacher'), // Assuming 'role' is equivalent to 'userType'
    password: joi.string().pattern(new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    )).required(),
    c_password: joi.ref("password"),
    fullName: joi.string().min(3).required() // Adding validation for the full name
}).with("password", "c_password");

module.exports = { newUserSchema };
