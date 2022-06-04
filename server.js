const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const fish = {
  'rainbow': {
    'species': 'test',
    'native': 'non-native',
    'range': 'test',
    'status': 'test',
    'image': 'test'
  },
  'brown trout': {
    'species': 'test',
    'native': 'non-native',
    'range': 'test',
    'status': 'test',
    'image': 'test'
  },
  'westslope cutthroat trout': {
    'species': 'test',
    'native': 'native',
    'range': 'test',
    'status': 'test',
    'image': 'test'
  },
  'yellowstone cutthroat trout': {
    'species': 'test',
    'native': 'native',
    'range': 'test',
    'status': 'test',
    'image': 'test'
  },
  'bull trout': {
    'species': 'test',
    'native': 'native',
    'range': 'test',
    'status': 'test',
    'image': 'test'
  },
  'brook trout': {
    'species': 'test',
    'native': 'non-native',
    'range': 'test',
    'status': 'test',
    'image': 'test'
  },
  'carp': {
    'species': 'test',
    'native': 'non-native',
    'range': 'test',
    'status': 'test',
    'image': 'test'
  },
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
  const fishName = request.params.name.toLowerCase()
  if (fish[fishName]) {
    response.json(fish[fishName])
  } else {
    response.json(fish['carp'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running at ${PORT}`)
})