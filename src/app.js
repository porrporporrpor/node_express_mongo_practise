require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());

const connectDB = require('./db/connection');

const coursesRoute = require('./routes/courses');
app.use('/api/courses', coursesRoute);

const port = process.env.PORT || 3000;

connectDB()
  .then((conn) => {
    console.log(`Database is connecting at ${conn.connections[0].host}`);
    app.listen(port, () => {
      console.log(`Server is listening port ${port}`);
    });
  })
  .catch((e) => {
    console.log(`Database connection error : ${e.codeName}(${e.code})`);
  });
