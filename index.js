const express = require('express')
const player = require('./player/model')
const teamRouter = require('./team/router')
const playerRouter = require('./player/router')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

const app = express()
app.use(jsonParser)
const port = process.env.PORT || 4000

app.use(teamRouter)
app.use(playerRouter)

app.listen(port, console.log(`listening on port: ${port}`))