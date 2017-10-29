const usersRoutes = require("./users");

const constructorMethod = (app) => {
    app.use("/", usersRoutes);

    app.use("*", (req, res) => {
        res.redirect("/users/static");
    })
};

module.exports = constructorMethod;