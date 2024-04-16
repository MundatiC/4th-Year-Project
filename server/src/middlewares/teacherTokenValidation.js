const { tokenVerifier } = require("../utils/token");


async function teacherTokenValidation(req, res, next) {
    let token = req.headers['authorization']?.split(' ')[1];
    try{
      if(!token) return next({status:400, message: 'Token not provided'})
     let user = await tokenVerifier(token);
    
    
     if (user) {
       
         req.user = user;
         let role = user.user.UserType;
         if(role === "Teacher"){
            next()
         } else{
            next({ status: 401, message: "Unauthorized" });
         }
         
     }
    } catch(error){
     next({status:401, message: error.message})

    }
}

module.exports = teacherTokenValidation;