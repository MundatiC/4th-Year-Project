const express = require("express");
require("dotenv").config();
const cors = require("cors");
const config = require("./src/config/config");
const sql = require("mssql");
const path = require('path');
const authRouter = require("./src/routes/authRoutes");
const teacherRouter = require("./src/routes/teacherRoutes");
const studentRouter = require("./src/routes/studentsRoutes")

const app = express()
const staticFilesDirectory = path.join(__dirname, './src/public');

// Serve static files from the specified directory
app.use(express.static(staticFilesDirectory));

app.use(express.json())
app.use(cors({
    origin: 'http://127.0.0.1:5501',
    credentials: true,
    optionSuccessStatus: 200
}))

async function connectToDatabase() {

    try {
        const pool = await sql.connect(config)
        console.log("Connected to the database")

        app.use((req, res, next) => { req.pool = pool; next() })

        app.set("view engine", "ejs")

        app.get(
            "/",
            (req, res, next) => {
                let cont = true;
                if (cont) {
                    console.log("Hello from the middleware");
                    next();
                } else {
                    res.send("Error logged from middleware");
                }
            },
            (req, res) => {

                res.send("Ok")
            }
        );
        app.use(authRouter)
        app.use(teacherRouter)
        app.use(studentRouter)


        app.use("*", (req, res, next) => {
            const error = new Error("Route Not found");
            next({
                status: 404,
                message: error.message,
            });
        });

        app.use((error, req, res, next) => {
            res.status(500).send({
                success: false,
                message: error.message,
            });
        });

        const port = process.env.PORT;

        app.listen(port, () => console.log(`Server on port: ${port}`));

    } catch (error) {
        console.log('Error connecting to the database')
        console.log(error)
    }

}

connectToDatabase();
