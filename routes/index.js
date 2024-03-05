const express = require('express');
const router = express.Router();
const { getResponses} = require('../controller')


router.route('/:formId/filteredResponses').get(getResponses);

module.exports = router