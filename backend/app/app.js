const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

const routes = require('./routes');

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err, req, res, next) => {
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).send(err);
  } else {
    res.status(500).send("Server Error");
  }

  console.error(err);
});

module.exports =  app;
