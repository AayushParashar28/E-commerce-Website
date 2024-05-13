const express = require("express")
const connect = require("./src/config/database.config")


const app = express()

const SetupandStartServer = async () => {

    const PORT = 4000;
    app.listen(PORT, async (req, res) => {
        console.log(`Server Runs on ${PORT}`)

        await connect();
        console.log("Database Connected");
    })

}

SetupandStartServer();