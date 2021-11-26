require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const surveyRoute = require('./routes/surveyRoute')

app.use(express.json())
app.use(cors())

app.use('/surveys', surveyRoute)

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});

const PORT = 5000 || process.env.PORT
app.listen(PORT, () => console.log(`server running on port: ${PORT}`))