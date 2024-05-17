const express =  require("express")
const userController = require("../controller/user.controller")

const UserRouter = express.Router();

UserRouter.post("/user",userController.createUser);

UserRouter.get("/Allusers",userController.getAllUser);

UserRouter.post("/signin",userController.signin);

module.exports = UserRouter ;