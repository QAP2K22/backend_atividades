const express = require('express');
const router = express.Router();

const initialRoute = require("./initialRoute/initialRoute")
const lista01 = require('./lista01/lista01');
const lista02 = require('./lista02/lista02');
const lista03 = require('./lista03/lista03');
const lista04 = require('./lista04/lista04');
const lista05 = require('./lista05/lista05');

router.use('/', initialRoute)
router.use('/lista01', lista01)
router.use('/lista02', lista02)
router.use('/lista03', lista03);
router.use('/lista04', lista04);
router.use('/lista05', lista05);


module.exports = router