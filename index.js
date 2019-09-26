const express = require('express')
const db = require('./db')
const team = require('./team/model')
const app = express()
const port = process.env.PORT || 4000

//app.use(team)

app.listen(port, console.log(`listening on port: ${port}`))