const express = require('express')
const app = express()
const port = 4000
const path = require('path');


app.use(express.static('public'));
app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/data', (req, res) => {
  const dataReceived = req.body;
  console.log('Data received:', dataReceived);
  res.json({ message: 'Data received successfully!' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
