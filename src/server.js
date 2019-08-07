const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://davispc10:mongodb@omnistack-f1ow9.mongodb.net/timdev?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

server.use(express.json());
server.use(routes);

server.listen(3333);
