const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const fish = {
  'rainbow trout': {
    'species': 'Rainbow Trout',
    'latin name': 'Oncorhynchus mykiss',
    'native': 'non-native',
    'range': 'Non native throughout the state of Montana. Native in only the Kootenei River drainage',
    'status': 'Common',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Female_Rainbow_Trout_in_hand.JPG'
  },
  'brown trout': {
    'species': 'Brown Trout',
    'latin name': 'Salmo Trutta',
    'native': 'non-native',
    'range': 'Found throughout Montana rivers',
    'status': 'test',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/9/95/Browntrout029.jpg'
  },
  'westslope cutthroat trout': {
    'species': 'Westslope Cutthroat Trout',
    'latin name': 'Oncorhynchus clarkii lewisi',
    'native': 'native',
    'range': 'The westslope cutthroat trout is found in the Kootenai watershed, the Clark Fork watershed, the headwaters of the Missouri river and the headwaters of the Saskatchewan River.',
    'status': 'At risk',
    'image': 'https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2ZsNDM5MzE4MzU3NzEtaW1hZ2Uta294dXE5c3ouanBn.jpg'
  },
  'yellowstone cutthroat trout': {
    'species': 'Yellowstone Cutthroat Trout',
    'latin name': 'Oncorhynchus clarkii bouvieri',
    'native': 'native',
    'range': 'Historically, Yellowstone cutthroat trout were believed to have occupied much of the Yellowstone River basin, including portions of the Clarks Fork of the Yellowstone River, Bighorn River, and Tongue River basins in Montana and Wyoming, and parts of the Snake River basin in Wyoming, Idaho, Utah, and Nevada. This species has been introduced to many watersheds in Montana where they were not native.',
    'status': 'At risk and declining in some areas.',
    'image': 'https://www.nps.gov/yell/learn/nature/images/Spawning-Cutthroat-Lamar-Valley-photo-by-Jay-Fleming.jpg?maxwidth=1200&maxheight=1200&autorotate=false'
  },
  'bull trout': {
    'species': 'Bull Trout',
    'latin name': 'Salvelinus confluentus',
    'native': 'native',
    'range': 'Native west of the continental divide and to the headwaters of the Saskatchewan River.',
    'status': 'Threatened',
    'image': 'https://idfg.idaho.gov/sites/default/files/styles/threshold-480/public/media/bull_trout.jpg?itok=jb0l2OAq'
  },
  'brook trout': {
    'species': 'Brook Trout',
    'latin name': 'Salvelinus fontinalis',
    'native': 'non-native',
    'range': 'Introduced throughtout Montana waters',
    'status': 'Common/Invasive',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Brook_trout_in_water.jpg'
  },
  'carp': {
    'species': 'Common Carp',
    'latin name': 'Cyprinus carpio',
    'native': 'non-native',
    'anglers': 'The most prized fish species by Montana anglers',
    'range': 'Primarily found east of the continental divide.',
    'status': 'Invasive',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Caprinus_carpio_Prague_Vltava_1.jpg'
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