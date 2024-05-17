const mongoose = require("mongoose")


const { Schema } = mongoose;

const productSchema = new Schema(
    {
        ProductName: {
            type: String,
            allowNull: false
        },
        Category: {
            type: String,
            allowNull: false
        },
        Price: {
            type: String,
            allowNull: false
        },
        Id: {
            type: String,
            allowNull: false,
            unique: true
        },
    },
    {timestamps : true}
);

const Product = mongoose.model("Product",productSchema)

module.exports = Product ;