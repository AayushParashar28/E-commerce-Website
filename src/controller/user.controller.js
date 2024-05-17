const UserModel = require("../Model/user.model")

exports.createUser = async (req, res) => {
    try {
        const User = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            MobileNumber: req.body.MobileNumber,
            email: req.body.email,
            password: req.body.password
        }

        const result = await UserModel.create(User)
        return res.status(201).json({
            sucess: true,
            response: result
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}

exports.getAllUser = async (req, res) => {
    try {
        const result = await UserModel.find();

        return res.status(200).json({
            sucess: true,
            response: result
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}

exports.signin = async (req, res) => {
    try {
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        const checkUser = await UserModel.findOne({ email: user.email })
        if (!checkUser) {
            return res.status(200).json({
                "msg": "Invalid Email"
            })
        }
        const checkpassword = await UserModel.findOne({ password: user.password })
        if (!checkpassword) {
            return res.status(201).json({
                "msg": "Invalid Password"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}

