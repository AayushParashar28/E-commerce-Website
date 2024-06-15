const express = require("express")
const ProductController = require("../controller/product.controller")

const ProductRouter = express.Router();

ProductRouter.post("/product", ProductController.createProduct)
ProductRouter.post("/update", ProductController.updateProduct)
ProductRouter.get("/getall", ProductController.getAllProducts)
ProductRouter.delete("/deletebyid",ProductController.deleteProductbyId)
ProductRouter.get("/getproductbyId",ProductController.getproductbyId)

module.exports = ProductRouter;