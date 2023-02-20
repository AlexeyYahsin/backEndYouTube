import express from 'express'
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!!!!')
})
app.get('/samurais', (req, res) => {
  res.send('Hello samurais!!!!!')
})
app.post('/samurais', (req, res) => {
  res.send('We have created samurai')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})