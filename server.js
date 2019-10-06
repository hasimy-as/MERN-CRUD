import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

import index from './routes/index';
import tasks from './routes/tasks';

const PORT = 3001 || process.env.PORT;
const server = 'localhost';
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', tasks);

app.listen(PORT, () => console.log(`Connected to ${server}:${PORT}`));
