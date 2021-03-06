const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    console.log(req.body)
    res.render('places/new')
})

router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400' //default image if one is not provided
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('show', { place: places[id], id})
    }
  })

  router.delete('/:id', (req, res) => {
      let id = Number(req.params.id)
      if (isNaN(id)) {
          res.render('error404')
      }
      else if (!places[id]) {
          res.render('error404')
      }
      else {
          places.splice(id, 1)
          res.redirect('/places')
      }
  })
  

module.exports = router

  