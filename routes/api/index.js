const router = require("express").Router();
const usersRoutes = require("./usersRouter");
const systemRoutes = require("./systemRouter");


//  routes  /api/
router.use("/users", usersRoutes);
router.use("/system", systemRoutes);

module.exports = router;
