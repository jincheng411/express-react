const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist/index.html')));
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({name: 'jin'})
})

app.listen(port, () => {
  console.log('listening on port ' + port);
});