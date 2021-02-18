const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config();
const app = express();
const distPath = path.join(__dirname, '../build');
const htmlIndex = path.join(distPath, 'index.html');
const port = process.env.PORT || 8080;
app.use(express.static(distPath));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.get('*', (req, res) => {
  res.sendFile(htmlIndex);
});
app.listen(port, () => {
  console.log(`Barefoot nomad is  running on port: ${port}`);
});