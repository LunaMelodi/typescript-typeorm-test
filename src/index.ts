import express from 'express';

const app = express();

const getYear = (date: Date): string => {
  return `${date.getFullYear()}`;
};

app.get('/', (req, res) => {
  res.send(`Hello World ! 2350`);
});

app.listen(8000, () => {
  console.log('App listening on port 30000!');
});
