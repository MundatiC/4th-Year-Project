const createMarkup = require("../utils/createMarkup");
const sendMail = require("../utils/sendMail");

async function changeGameSettings(req, res) {
    let { Math, Numbers, Speed, Volume, UserID } = req.body;
    let { pool } = req;
   

    try {
        results = await pool
            .request()
            .input("UserID", UserID)
            .input("Math", Math)
            .input("Numbers", Numbers)
            .input("Speed", Speed)
            .input("Volume", Volume)
            .execute("EditUserGameSetting")
            console.log(results)
            if(results.rowsAffected[0] > 0){
                res.status(201).send({
                    success: true,
                    message: "Game settings successfully updated",
                  });
                } else {
                  res.status(500).send({
                    success: false,
                    message: "An error occurred",
                  });
                }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        });
    }

}


async function getGameSettings(req, res) {
    let { UserID } = req.body;
    let { pool } = req;

    try {
        let results = await pool.request()
            .input("UserID", UserID)
            .execute("GetUserGameSettings");

        // Initialize an empty object to store the transformed game settings
        let gameSettings = {};

        // Iterate over the recordset array and construct the game settings object
        for (let setting of results.recordset) {
            gameSettings[setting.SettingName] = convertToCorrectType(setting.SettingValue);
        }

        // Add UserID to the game settings object
        gameSettings.UserID = UserID;

        // Send the transformed game settings as the response
        res.status(200).json(gameSettings);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        });
    }
}

// Helper function to convert setting values to correct types
function convertToCorrectType(value) {
    if (!isNaN(value)) {
        return parseFloat(value); // Convert to number if value is numeric
    } else {
        return value; // Otherwise, keep it as string
    }
}


async function searchStudents(req, res) {
    let { username } = req.body;
    console.log(req.body)
    let { pool } = req;

    try {
        let results = await pool.request()
            .input("username", username)
            .execute("[SearchStudentsByUsername]");
            console.log(results.recordsets)

        res.status(200).json(results.recordset);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        });
    }
}

async function getUserGamesByUserID(req, res) {
    // Extract UserID from request body
    let { userID } = req.body;
    
    // Extract pool from request object
    let { pool } = req;

    try {
        // Execute the stored procedure
        let results = await pool.request()
            .input("UserID", userID) // Assuming UserID is the parameter name expected by the stored procedure
            .execute("GetUserGamesByUserID"); // Replace "GetUserGamesByUserID" with the actual name of your stored procedure

        // Send the retrieved user games as a JSON response
        res.status(200).json(results.recordset);
    } catch (error) {
        // Handle any errors
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
}

async function sendMailM(req,res){
    let { teacherMessage, email } = req.body;
    console.log(req.user)

    try {
        let html = await createMarkup("./src/views/email.ejs", {teacherMessage: teacherMessage});

        const message = {
            to: email,
            from: process.env.EMAIL_USER,
            subject: "Message from Your Teacher",
            html: html,
          };
          await sendMail(message);

          res.status(200).send({
            success: true,
            message: "Email sent successfully",
          })


    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        });
    }
}



module.exports = { changeGameSettings, getGameSettings, searchStudents, getUserGamesByUserID, sendMailM };