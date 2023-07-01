// const express = require('express')
import express from 'express'
const app = express()

// Import to Use Routes
import eventRoute from '../src/routes/events'

// Declare Use Route
app.use('/event', eventRoute)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
console.log('Server Listening On Port 3000')