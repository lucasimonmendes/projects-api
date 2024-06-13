const express = require("express");

const router = express.Router();
const reposController = require("../controllers/reposController");

router.get("/repos", reposController.listRepos);

module.exports = router;
