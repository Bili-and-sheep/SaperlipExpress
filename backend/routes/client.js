const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/clientController');

router.get('/', stuffCtrl.getAllrouble);
router.post('/', stuffCtrl.createRouble);

module.exports = router;