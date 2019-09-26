const express = require('express')
const teamRouter = require('./team/router')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

const app = express()
app.use(jsonParser)
const port = process.env.PORT || 4000

app.use(teamRouter)

app.listen(port, console.log(`listening on port: ${port}`))