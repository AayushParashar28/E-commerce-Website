const ProductModel = require("../Model/product.model");

exports.createProduct = async (req , res) => {
    try {
        const Product = {
            ProductName:req.body.ProductName,
            Category:req.body.Category,
            Price:req.body.price,
            Id:req.body.Id
        }

        const result = await ProductModel.create(Product);
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