const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27018");
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = connect;