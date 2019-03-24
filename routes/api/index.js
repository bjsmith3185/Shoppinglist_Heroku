const router = require("express").Router();
const usersRoutes = require("./usersRouter");
const shoppingRoutes = require("./shoppingRouter");
const systemRoutes = require("./systemRouter");


//  routes  /api/
router.use("/users", usersRoutes);
router.use("/shopping", shoppingRoutes);
router.use("/system", systemRoutes);

module.exports = router;
