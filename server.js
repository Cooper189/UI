const express = require('express');
const path = require('path');
const http = require('http');
const proxy =require('express-http-proxy');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', proxy('http://127.0.0.1:8000/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = '4500';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));