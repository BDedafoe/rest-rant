const router = require('express').Router()
const db = require('../models')

// Places home page - index.jsx
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', {places})
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})
// New Added Place to appear on Index page
router.post('/', (req, res) => {
    if (req.body.pic) {
        req.body.pic = 'http://placekitten.com/350/350'
    }
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
            let message = 'Validation Error: '
            for (var field in err.errors) {
                message += `${field} was ${err.errors[field].value}. `
                message += `${err.errors[field].message}`
            }
            res.render('places/new', {message})
        }
        else {
            res.render('error404')
        }
    })
})
// Add Place page - new.jsx
router.get('/new', (req, res) => {
    res.render('places/new')
})
// Show.jsx page
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('show', {place})
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })
// Upload the edit page to the show.jsx page
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})
// Delete button to delete selected restaraunt
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})
// Edit page with form - edit.jsx
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(err => {
            res.render('error404')
        })
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
  })

router.delete('/:id/rant/:rantID', (req, res) => {
    res.send('GET /places/:id/rant/:rantID stub')
})

module.exports = router

  