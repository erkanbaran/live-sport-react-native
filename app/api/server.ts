import express from 'express';
import data from './data.json';

const app = express();
const PORT = 1337;

app.get('/', (req, res) => res.send('Hello world!'));
app.get('/data', (req, res) => res.send(data));

app.listen(PORT, () => {
  console.log(`Ready @ http://localhost:${PORT}`);
});
