const express = require("express")
const connect = require("./src/config/database.config")
const UserRouter = require("./src/routes/user.routes")
const ProductRoute = require("./src/routes/product.routes")


const app = express()

const SetupandStartServer = async () => {

    app.use(express.json())
    app.use(UserRouter);
    app.use(ProductRoute);

    const PORT = 4000;
    app.listen(PORT, async (req, res) => {
        console.log(`Server Runs on ${PORT}`)

        await connect();
        console.log("Database Connected");
    })

}

SetupandStartServer();