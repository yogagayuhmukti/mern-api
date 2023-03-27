exports.createProduct = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  res.json({
    message: "create product success !!!!",
    data: {
      id: 1,
      name: name,
      price: price,
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: "get all product success",
    data: {
      id: 1,
      name: "sari gandum",
      price: 8000,
    },
  });
  next();
};
