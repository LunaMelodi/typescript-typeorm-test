import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import todoRoutes from './routes/TodoRoutes';

const app = express();
const port = 8000;

if (process.env.NODE_ENV === 'production') {
  app.use(
    // @ts-ignore
    morgan('common', {
      skip(req, res) {
        return res.statusCode < 400;
      },
      stream: `${__dirname}/../morgan.log`
    })
  );
} else {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

//app.use('/api/todos', todoRoutes);

app.get('/', (_, res) => {
  res.send(`Hello World ! Does this still work?`);
});

app.get('*', (_, res) =>
  res.status(200).send({
    message: 'This is the todolist API, but this was not a valid route.'
  })
);

app.listen(port, () => {
  console.log(`The server is running on port ${port}!`);
});
