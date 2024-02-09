const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const PORT = process.env.PORT || 3001
const plantController = require('./controllers/plantController')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, ()=> console.log('connected!'))

app.get('/', (req, res) => res.send ('welcome to our page'))

app.get('/plants', plantController.getAllPlants)
app.post('/plants', plantController.createPlant)
app.get('/plants/:id', plantController.getPlantById)
app.put('/plants/:id', plantController.updatePlant)
app.delete('/plants/:id', plantController.deletePlant)