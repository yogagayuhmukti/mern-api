const express = require(`express`);
const productRouter = require(`./src/routes/products`);

const app = express();

app.use(`/`, productRouter);

app.listen(4000);
