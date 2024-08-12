const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

app.post('/api', async (req, res) => {
  const { url } = req.body;
  const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`);
  res.send(response.data);
});

app.listen(8081, () => {
  console.log('Server running on port 8081');
});
