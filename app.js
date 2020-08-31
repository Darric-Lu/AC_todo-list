const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongoose error!')
})
db.once('open', () => {
  console.log('mongoose connected!')
})

app.get('/', (req, res) => {
  res.send('Hello welcome')
})
app.listen(3000, () => {
  console.log('App is listening on http://localhost:3000')
})