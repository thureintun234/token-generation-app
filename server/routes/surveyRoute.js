const express = require('express')
const surveyController = require('../controllers/surveyController')
const router = express.Router()

router
  .route('/')
  .get(surveyController.getAllSurveys)
  .post(surveyController.createNewSurvey)

module.exports = router
