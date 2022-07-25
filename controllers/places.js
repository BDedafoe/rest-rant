const router = require('express').Router()
const places = require('../models/places.js')
// Places home page - index.jsx
router.get('/', (req, res) => {
    res.render('places/index', {places})
})
// Add Place page - new.jsx
router.get('/new', (req, res) => {
    console.log(req.body)
    res.render('places/new')
})
// New Added Place to appear on Places page
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
// Show.jsx page
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
// Upload the edit page to the show.jsx page
  router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        if (!req.body.pic) {
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
  })
  
// Edit page with form - edit.jsx
  router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/edit', { place: places[id], id })
    }
  })
// Delete place 
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

  