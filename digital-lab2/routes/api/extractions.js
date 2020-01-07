const router = require("express").Router();
const extractionController = require("../../controllers/extractionController");

// Matches with "/api/extractions"
router.route("/")
  .get(extractionController.findAll)
  .post(extractionController.create);

// Matches with "/api/extractions/:extractID"
router
  .route("/:extractID")
  .get(extractionController.findById)
  .put(extractionController.update)
  .delete(extractionController.remove);

module.exports = router;