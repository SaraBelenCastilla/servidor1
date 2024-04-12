const express = require('express')
const router = express.Router();

const mongoose = require('mongoose')



const UserController = require('../controllers/UserController')

router.get('/',UserController.getAllMuebles)

  module.exports = router;