const mongoose = require('mongoose');
var assert = require('assert');

const db = process.env.TO_DO_DB;

const connectDB = async () => {
  console.log(`checkDb ${db}`)
  let attempts = 10;
  while (attempts) {
    try {
      //TODO delete this string
      await mongoose.connect("mongodb+srv://admin:admin@cluster0.bogyx.mongodb.net/toDo?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true } );

      console.log('MongoDB connected...');


      // break out of loop once conncected
      break;
    } catch (err) {
      console.log("Error: ", err.message);
      attempts -= 1;
      console.log(`connection attempts left: ${attempts}`);
      // wait for 10 seconds before retrying
      await new Promise(res => setTimeout(res, 10000));
    }
  }
};

module.exports = { connectDB };