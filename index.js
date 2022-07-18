require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))     //places index page

app.get('/', (req, res) => {            //homepage
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')       //404 page(routes not defined)
})

app.listen(process.env.PORT)
