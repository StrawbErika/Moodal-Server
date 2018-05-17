import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './router';

const app = express();

const db = 'moodal';

mongoose.connect(`mongodb://localhost/${db}`, err => {
  if (err) console.log('Error connecting to the database!');
  else console.log('Successfully connected to the database!');
});

mongoose.Promise = global.Promise;

app.use(cors());

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(router);

app.listen(process.env.port || 3002, () => {
  console.log('Listening to port 3002');
});
