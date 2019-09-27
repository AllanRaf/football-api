//player router

const { Router } = require('express')
const Player = require('./model')

const router = new Router()

router.get('/player', (request, response, next) => {
    
    Player.findAll()
    .then(player => response.send(player))
    .catch(err => next(err))
})

//create a new player
router.post('/player', (request, response, next) => {

    Player.create(request.body)
    .then(player => response.status(201).send(player))
    .catch(err => next(err))

})

//get information about a player
router.get('/player/:id', (request, response, next) => {
    
    Player.findOne({
        where:{
            id: request.params.id
        }
    })
    /*Player.findByPk(request.params.id)*/
    .then(player => {
        console.log("Player is:", player)
        response.status(201).send(player)})
    .catch(err => next(err))
})

//modify details about a player
router.put('/player/:number', (request, response, next) => {
    console.log('request.params.number is:', request.params.number)
    Player.findOne({
        where:{
            number: request.params.number
        }
    })
    .then( player => {
        console.log('player is:', player)
        player.update({number: request.body.number })
        response.status(201).send(player)
        })
    .then(err => next(err))
})

module.exports = router