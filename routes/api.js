const express = require('express');
const router = express.Router();
const admin = require("../firebase");
// const db = require("../mysql");

router.post("/login", (req, res, next) => {
    const idToken = req.body.idToken;
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    admin.auth().createSessionCookie(idToken, { expiresIn })
        .then(sessionCookie => {
            const options = { maxAge: expiresIn, httpOnly: true };
            res.cookie("session", sessionCookie, options);
            res.status(200).json({});
        })
        .catch(err => {
            console.log("err:", err);
            res.status(500).json({
                msg: "server error"
            })
        });
});

// /api/info
router.get('/info', (req, res, next) => {
    console.log("有人使用GET方法訪問 /api/info");
    res.status(200).json({
        title: "Express",
        subtitle: "Hello world!!!!"
    });
});

router.get('/user/:userId', (req, res, next) => {
    const userId = req.params.userId;
    res.status(200).json({
        message: `你傳來的userId是 ${userId}`
    });
});

// 取得所有產品
// router.get('/product', (req, res ,next) => {
//     db.query("SELECT * FROM products", (err, products) => {
//         if (err) throw err;
//         console.log("products:", products);
//         res.status(200).json(products);
//     }); 
// });

// 取得單一產品
// router.get('/product/:id', (req, res ,next) => {
//     const id = req.params.id;
//     db.query("SELECT * FROM products WHERE id = ?", [id], (err, products) => {
//         if (err) throw err;
//         console.log("products:", products);
//         res.status(200).json(products[0])
//     });
// });

// 新增一個產品
// router.post('/product', (req, res ,next) => {
//     const product = req.body;
//     db.query("INSERT INTO products SET ?", [product], (err, result) => {
//         if (err) throw err;
//         console.log("result:", result);
//         res.status(200).json({
//             newProductId: result.insertId,
//             msg: "OK"
//         });
//     });
// });

// 更新一個產品
// router.put('/product/:id', (req, res ,next) => {
//     const product = req.body;
//     const id = req.params.id;
//     db.query("UPDATE products SET ? WHERE id = ?", [product, id], (err, result) => {
//         if (err) throw err;
//         console.log("result:", result);
//         res.status(200).json({
//             msg: "OK"
//         });
//     });
// });

// 刪除一個產品
// router.delete('/product/:id', (req, res ,next) => {
//     const id = req.params.id;
//     db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
//         if (err) throw err;
//         console.log("result: ", result);
//         res.status(200).json({
//             msg: "OK"
//         });
//     });
// });


module.exports = router;
