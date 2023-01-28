const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hager', (req, res) => {
  res.send('hager is saying hiiii')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})