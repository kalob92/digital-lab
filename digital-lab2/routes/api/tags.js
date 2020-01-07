const router = require("express").Router();
const tagController = require("../../controllers/tagController");

// Matches with "/api/tags"
router.route("/")
  .get(tagController.findAll)
  .post(tagController.create);

// Matches with "/api/tags/:tagNumber"
router
  .route("/:tagNumber")
  .get(tagController.findById)
  .put(tagController.update)
  .delete(tagController.remove);

module.exports = router;