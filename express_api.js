import express from 'express'
import sync from './src/sync'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/sync', (req, res, next) => {
  auth(req.body.clientId, req.headers.get('Authorization'), (client) => {
    sync({
      auth: client,
      spreadsheetId: '1IfBUB9PiXdTLrmHgqQM-oRdThrhIdqFZU7_jaaxeW3A'
    }, (data) => res.json(data))
  })
})

app.listen(6000, () => {
  console.log('App listening on port 6000!')
})