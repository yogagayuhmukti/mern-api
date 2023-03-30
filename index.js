const express = require(`express`);
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);
const multer = require(`multer`);
const path = require(`path`);

const app = express();

const authRoutes = require(`./src/routes/auth`);
const blogRoutes = require(`./src/routes/blog`);

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `images`);
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + `-` + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === `image/png` ||
    file.mimetype === `image/jpg` ||
    file.mimetype === `image/jpeg`
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(bodyParser.json());
app.use(`/images`, express.static(path.join(__dirname, `images`)));
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single(`image`)
);

app.use((req, res, next) => {
  res.setHeader(`Access-Control-Allow-Orgin`, `*`);
  res.setHeader(
    `Access-Control-Allow-Orgin`,
    `GET, POST, PUT, PATCH, DELETE, OPTIONS`
  );
  res.setHeader(`Access-Control-Allow-Orgin`, `Content-Type, Authorization`);
  next();
});

app.use(`/v1/auth`, authRoutes);
app.use(`/v1/blog`, blogRoutes);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    "mongodb://connectPlease:Connect123321@ac-1zqofym-shard-00-00.dc62v71.mongodb.net:27017,ac-1zqofym-shard-00-01.dc62v71.mongodb.net:27017,ac-1zqofym-shard-00-02.dc62v71.mongodb.net:27017/?ssl=true&replicaSet=atlas-sio3yv-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => app.listen(4000))
  .then(() =>
    console.log("connected to database and listening to localhost 4000")
  )
  .catch((err) => console.log(err));
