
const router = require("express").Router();
const apiRoutes = require("./api");
const populateRoutes = require('./populate/populate')



// API Routes
router.use("/api", apiRoutes);

router.use('/populate', populateRoutes);




module.exports = router;
