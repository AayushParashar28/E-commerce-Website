const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            allowNull: false
        },
        lastName: {
            type: String,
            allowNull: false
        },
        mobile: {
            type: String,
            allowNull: false
        },
        email: {
            type: String,
            allowNull: false,
            unique: true
        },
        password: {
            type: String,
            allowNull: false
        },
    },
    {timestamps : true}
);

const User = mongoose.model("User",userSchema)

mopdule.exports = User ;