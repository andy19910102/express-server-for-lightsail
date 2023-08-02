const admin = require('../firebase');

const loginChecker = (req, res, next) => {
    console.log("進入loginChecker");
    const sessionCookie = req.cookies.session || '';
    admin.auth().verifySessionCookie(sessionCookie, true /** checkRevoked */)
        .then(user => {
            // session cookie 有效
            // console.log("user:", user);
            res.locals.email = user.email;
            next();
        })
        .catch(err => {
            // session cookie 無效 非登入的情況
            console.log("err:", err);
            res.send("<h1>請先登入</h1>");
        });
};

module.exports = loginChecker;