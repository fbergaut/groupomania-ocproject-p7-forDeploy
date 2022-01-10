const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/users", {
            target:"https://groupomania-ocproject-p7-fb.herokuapp.com",
            changeOrigin: true
        })
    );
};