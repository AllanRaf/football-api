const { Router } = require('express')
const Team = require('./model')


const router = new Router()

router.get('/team', (request, response, next) => {
            Team.findAll()
            .then(team => response.send(team))
            .catch(err => next(err))
    })

router.post('/team', (request, response, error) =>{
        Team.create(
            request.body
        )
        .then(team => response.status(201).send(team))
    })

module.exports = router