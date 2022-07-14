require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))     //places index page

app.get('/', (req, res) => {            //homepage
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')       //404 page(routes not defined)
})

app.listen(process.env.PORT)
