const { Router } = require('express')
const Team = require('./model')

const router = new Router()

router.get('/team', (request, response, next) => {
            Team.findAll()
            .then(team => response.send(team))
            .catch(err => next(err))
    })

module.exports = router