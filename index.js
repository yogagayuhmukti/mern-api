const express = require(`express`);
const bodyParser = require(`body-parser`);
const productRouter = require(`./src/routes/products`);
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader(`Access-Control-Allow-Orgin`, `*`);
  res.setHeader(
    `Access-Control-Allow-Orgin`,
    `GET, POST, PUT, PATCH, DELETE, OPTIONS`
  );
  res.setHeader(`Access-Control-Allow-Orgin`, `Content-Type, Authorization`);
  next();
});

app.use(`/v1/customer`, productRouter);

app.listen(4000);
