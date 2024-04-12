const express = require('express')
const router = express.Router();

const mongoose = require('mongoose')



const ModeloController= require('../controllers/ModeloController')

router.get('/',ModeloController.getAllModelo)

  module.exports = router;