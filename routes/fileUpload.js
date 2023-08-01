const express = require('express');
const router = express.Router();

const { localFileUpload } = require('../controllers/FileUpload');

router.post("/localfileupload",localFileUpload);

module.exports = router;