const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("有人訪問首頁囉!");
  res.locals.title = "你好";
  res.locals.subtitle = "這是一個網站";
  res.render('index');
});

router.get('/about', (req, res, next) => {
  console.log("有人訪問關於本站囉!");
  res.render('about');
});

module.exports = router;
