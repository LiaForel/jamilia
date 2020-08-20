// Node.js web application framework, express uses HTTP built in protocols for web requests and responses
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose'); // connect to mongoDB

require('dotenv').config();

// create an express server
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json()); // parse json from the server: res, req

const uri = process.env.ATLAS_URI; // database uri
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }); // start connection,parse mongodb connection string,

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB Database connection established successfully');
});

const informationRouter = require('./routes/information');
const usersRouter = require('./routes/users');
const membersRouter = require('./routes/members');
const domesticViolenceDataRouter = require('./routes/domesticViolenceData');

app.use('/information', informationRouter);
app.use('/users', usersRouter);
app.use('/members', membersRouter);
app.use('/domestic-violence-data', domesticViolenceDataRouter);

// start the applicatin listening to the port 5000
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
