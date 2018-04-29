import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

import router from './router';

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(router);

app.listen(process.env.port || 3002, () => {
  console.log('Listening to port 3002');
});
