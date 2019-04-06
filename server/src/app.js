const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const dao = require('./dao/index.js')

const {
  GET_COLUMNS,
  ADD_COLUMN,
  DELETE_COLUMN,
  UPDATE_COLUMN,
  GET_CARDS,
  ADD_CARD,
  DELETE_CARD,
  UPDATE_CARD
} = dao

const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())

app.get('/column', async (req, res) => {
  let columns = await GET_COLUMNS()

  res.send(columns)
})

app.post('/column', async (req, res) => {
  let {
    title
  } = req.body

  let column = await ADD_COLUMN(title)

  res.send(column)
})

app.put('/column', async (req, res) => {
  let {
    id,
    title
  } = req.body

  let column = await UPDATE_COLUMN({
    id,
    title
  })

  res.send(column)
})

app.delete('/column', async (req, res) => {
  let {
    id
  } = req.body

  let column = await DELETE_COLUMN(id)

  res.send(column)
})

// card
app.get('/card', async (req, res) => {
  let cards = await GET_CARDS()

  res.send(cards)
})

app.post('/card', async (req, res) => {
  let {
    columnId,
    content
  } = req.body

  let card = await ADD_CARD({
    content,
    columnId
  })

  res.send(card)
})

app.put('/card', async (req, res) => {
  let {
    id,
    content
  } = req.body

  let card = await UPDATE_CARD({
    id,
    content
  })

  res.send(card)
})

app.delete('/card', async (req, res) => {
  let {
    id
  } = req.body

  let card = await DELETE_CARD(id)

  res.send(card)
})

app.listen(10086, () => {
  console.log('app started on port 10086')
})