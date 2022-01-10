const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/users", {
            target: "https://groupomania-ocproject-p7-fb.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    );

    app.use(
        proxy("/users/register", {
            target: "https://groupomania-ocproject-p7-fb.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    );

    app.use(
        proxy("/users/login", {
            target: "https://groupomania-ocproject-p7-fb.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    );

    app.use(
        proxy("/users/logout", {
            target: "https://groupomania-ocproject-p7-fb.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    );

    app.use(
        proxy("/users/follow", {
            target: "https://groupomania-ocproject-p7-fb.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    );

    app.use(
        proxy("/users/unfollow", {
            target: "https://groupomania-ocproject-p7-fb.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    );

    app.use(
        proxy("/posts", {
            target: "https://groupomania-ocproject-p7-fb.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    );

    app.use(
        proxy("/posts/like-post", {
            target: "https://groupomania-ocproject-p7-fb.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    );

    app.use(
        proxy("/posts/unlike-post", {
            target: "https://groupomania-ocproject-p7-fb.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    );

    app.use(
        proxy("/comments", {
            target: "https://groupomania-ocproject-p7-fb.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    );

    app.use(
        proxy("/jwt", {
            target: "https://groupomania-ocproject-p7-fb.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    );
};