const express = require(`express`);

const app = express();
const router = express.Router();

router.use(`/product`, (req, res, next) => {
  res.json({ name: "yogagayuh", email: "ygmukti@gmail.com" });
});
router.use(`/price`, (req, res, next) => {
  res.json({ price: "8000000" });
});

app.use(`/`, router);

app.listen(4000);
