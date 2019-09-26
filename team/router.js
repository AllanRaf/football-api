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

router.get('/team/:id', (request, response, next)=>{
    Team.findOne({
        where:{
            id: request.params.id
        }
    })
    .then(team => response.status(201).send(team))
    .catch(err => next(err))
})

module.exports = router