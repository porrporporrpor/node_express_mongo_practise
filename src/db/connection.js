require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const host = process.env.DB_HOST;
  const database_name = process.env.DB_NAME;
  return await mongoose.connect(
    `mongodb+srv://${username}:${password}@${host}/${database_name}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
};

module.exports = connectDB;
