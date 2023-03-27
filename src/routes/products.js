const express = require(`express`);
const router = express.Router();

const productsController = require(`../controllers/products`);

router.post(`/product`, productsController.createProduct);

router.get(`/products`, productsController.getAllProducts);

// router.put(`/product`, (req, res, next) => {
//   res.json({ name: "yogagayuh", email: "ygmukti@gmail.com" });
//   next();
// });

// router.delete(`/product`, (req, res, next) => {
//   res.json({ name: "yogagayuh", email: "ygmukti@gmail.com" });
//   next();
// });
module.exports = router;
