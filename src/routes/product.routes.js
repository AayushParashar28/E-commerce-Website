const express =  require("express")
const ProductController = require("../controller/product.controller")

const ProductRouter = express.Router();

ProductRouter.post("/product", ProductController.createProduct)


module.exports = ProductRouter;