const express = require("express");
const { body } = require(`express-validator`);

const router = express.Router();

const authController = require(`../controllers/auth`);

router.post(
  `/register`,
  [
    body(`name`).isLength({ min: 5 }).withMessage(`nama tidak sesuai`),
    body(`email`).isLength({ min: 5 }).withMessage(`email tidak sesuai`),
    body(`password`).isLength({ min: 5 }).withMessage(`password tidak sesuai`),
  ],
  authController.register
);

module.exports = router;
