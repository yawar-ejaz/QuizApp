const express = require("express");
const router = express.Router();
const { login, createUser } = require("../controllers/auth");

router.route("/login").post(login);
router.route("/signup").post(createUser);

module.exports = router;