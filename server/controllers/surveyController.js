const Survey = require('../models/Survey')

exports.getAllSurveys = async (req, res, next) => {
  try {
    const [surveys, _] = await Survey.findAll()
    console.log(surveys)

    return res.status(200).send(surveys)
  } catch (error) {
    next(error)
  }
}

exports.createNewSurvey = async (req, res, next) => {
  try {
    let { title, question1, question2, question3, userId } = req.body
    let survey = new Survey(title, question1, question2, question3, userId)

    survey = await survey.save()

    return res.status(201).send({ message: 'survey created', survey })
  } catch (error) {
    next(error)
  }
}