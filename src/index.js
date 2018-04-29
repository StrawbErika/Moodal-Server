import express from 'express';

const app = express();

app.listen(process.env.port || 3002, () => {
  console.log('Listening to port 3002');
});
