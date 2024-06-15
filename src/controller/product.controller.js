const ProductModel = require("../Model/product.model");

exports.createProduct = async (req , res) => {
    try {
        const Product = {
            ProductName: req.body.ProductName,
            Category: req.body.Category,
            Price: req.body.price,
            Id: req.body.Id
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

exports.updateProduct = async (req , res) => {
    try {
        const productid = {
            Id: req.body.Id
        }
        const checkId = await ProductModel.findOne({ Id: productid.Id })
        if (checkId) {
            checkId.Category = req.body.Category,
            checkId.Price = req.body.Price

            const result = await checkId.save();
            return res.status(200).json({
                "result": result
            })
        } else {
            return res.status(200).json({
                "msg": "Id Not Found"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}

exports.getAllProducts = async (req , res) => {
    try {
        const result = await ProductModel.find()

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

exports.deleteProductbyId = async (req , res) => {
    try {
        const productId = {
            Id:req.body.Id
        } 
        const checkId = await ProductModel.deleteOne({Id:productId.Id})
        if(checkId){
            return res.status(201).json({
                msg : "Deleted Sucessfully",
                sucess: true
            })
        }else{
            return res.status(201).json({
                msg : "Id not Found",
                sucess: true
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}

exports.getproductbyId = async (req , res) => {
    try {
        const id = {
            Id:req.body.Id
        }

        const checkId = await ProductModel.findOne({Id:id.Id})
        if(checkId){
            return res.status(201).json({
                sucess : true,
                response: checkId
            })
        }else{
            return res.status(200).json({
                msg :"Id Not Found"
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}