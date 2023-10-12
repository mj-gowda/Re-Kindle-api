import express from 'express';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoutes';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5555;
const mongoDBURL = process.env.MONGO_URL || '';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To Book store api');
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(PORT);
    console.log(error);
  });
