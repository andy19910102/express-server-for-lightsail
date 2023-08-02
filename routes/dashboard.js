const express = require('express');
const router = express.Router();
const loginChecker = require('../middlewares/login-middleware');

// 使用loginChecker中介
router.use(loginChecker);

/* GET dashbaord page. */
router.get('/', function (req, res, next) {
    res.render("dashboard");
});

module.exports = router;