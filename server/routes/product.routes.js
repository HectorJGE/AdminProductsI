const ProductController = require("../controllers/product.controller");

module.exports = app => {
  app.post("/api/products/new", ProductController.createNewProduct);
  app.get("/api/products", ProductController.findAllProduct);
  app.get("/api/product/:_id", ProductController.findOneProduct);
  app.put("/api/update/:_id", ProductController.updateProduct);
  app.delete("/api/delete/:_id", ProductController.deleteProduct);
};