const express = require('express');
const router = express.Router();

const productList = [
    { id: "1", name: "iPhone 12", price: 28900 },
    { id: "2", name: "iPhone 12 Pro", price: 33900 },
    { id: "3", name: "iPhone 12 Pro Max", price: 37900 },
    { id: "4", name: "iPhone 12 mini", price: 23900 }
];

/* /product/ */
router.get('/', function (req, res, next) {
    console.log("有人商品主頁");
    res.send('商品主頁');
});

router.get('/:productId', function (req, res, next) {
    const productId = req.params.productId;
    const product = productList.find(product => product.id === productId);
    console.log(product);
    if (!product) {
        res.locals.productList = productList;
        return res.render('product-not-found');
    }
    res.locals.product = product;
    // 使用 views/product-show.ejs 這個模板來產生HTML網頁
    res.render('product-show');
});

module.exports = router;
