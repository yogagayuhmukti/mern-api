const Autho = require(`../models/auth`);
const { validationResult } = require(`express-validator`);

exports.register = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error(`input value tidak sesuai`);
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const Registring = new Autho({
    name: name,
    email: email,
    password: password,
  });

  Registring.save()
    .then((result) => {
      res.status(201).json({
        message: "Authentication Success",
        data: result,
      });
    })
    .catch((err) => {
      console.log(`err`, err);
    });
};

// exports.register = (req, res, next) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;
//   const result = {
//     message: "Register Success",
//     data: {
//       uid: 1,
//       name: name,
//       email: email,
//     },
//   };
//   res.status(201).json(result);
// };
