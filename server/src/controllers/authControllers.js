const bcrypt = require('bcrypt')
require('dotenv').config()

const getAUser = require('../utils/getAUser');
const { tokenGenerator } = require('../utils/token');


async function registerUser(req, res){
    let user = req.body;

    try {
        let { value } = req;
        let hashed_pwd = await bcrypt.hash(user.password, 8);

        const { pool } = req;
        
        if (pool.connected) {
            let results = await pool
            .request()
            .input("Username", value.username)
            .input("Email", value.email)
            .input("Password", hashed_pwd)
            .input("FullName", value.fullName)
            .input("UserType", "Student")
            .execute("AddUser");


            if(results.rowsAffected[0] > 0){
                res.status(201).send({
                    success: true,
                    message: "New users successfully added",
                  });
                } else {
                  res.status(500).send({
                    success: false,
                    message: "An error occurred",
                  });
                }
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
          });
    }

}

async function login(req, res){
    let { username, password} = req.body;
    const { pool }  = req;
 
    try {
     let user = await getAUser(username, pool)
     req.user = user
 
     if(user){
         let passwords_match = await bcrypt.compare(password, user.Password)
         if(passwords_match){
             let token = await tokenGenerator({user});
             console.log(token)
             res.status(200).send({
                 success: true,
                 message: "Login successful",
                 token,
                 user: user
               });
         } else{
             res.status(401).send({
                 success: false,
                 message: "Invalid login credentials",
               });
         }
         
     } else {
         res.status(401).send({
             success: false,
             message: "No user with this username exists",
           });
     }
     
    } catch (error) {
     res.status(500).send({
         success: false,
         message: error
       });
    }
 }

 async function registerTeacher(req, res){
    let user = req.body;

    try {
        let { value } = req;
        let hashed_pwd = await bcrypt.hash(user.password, 8);

        const { pool } = req;
        
        if (pool.connected) {
            let results = await pool
            .request()
            .input("Username", value.username)
            .input("Email", value.email)
            .input("Password", hashed_pwd)
            .input("FullName", value.fullName)
            .input("UserType", "Teacher")
            .execute("AddUser");


            if(results.rowsAffected[0] > 0){
                res.status(201).send({
                    success: true,
                    message: "New users successfully added",
                  });
                } else {
                  res.status(500).send({
                    success: false,
                    message: "An error occurred",
                  });
                }
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
          });
    }

}

module.exports = {
    registerUser,
    login,
    registerTeacher
}