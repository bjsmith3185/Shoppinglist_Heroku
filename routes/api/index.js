const router = require("express").Router();
const usersRoutes = require("./usersRouter");
const shoppingRoutes = require("./shoppingRouter");

//  routes  /api/
router.use("/users", usersRoutes);
router.use("/shopping", shoppingRoutes);


module.exports = router;
