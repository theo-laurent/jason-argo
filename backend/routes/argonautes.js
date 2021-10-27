const express = require("express");
const router = express.Router();

// controllers
const argonautsController = require("../controllers/argonauts");

router.post("/", argonautsController.createArgonaut);
router.get("/", argonautsController.getAllArgonauts);
router.delete("/", argonautsController.deleteArgonaut);

module.exports = router;
