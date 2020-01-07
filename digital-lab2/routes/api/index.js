const router = require("express").Router();
const extractionRoutes = require('./extractions');
const tagRoutes = require('./tags');

// Extraction routes
router.use("/extractions", extractionRoutes);

// Tag routes
router.use("/tags", tagRoutes);

module.exports = router;