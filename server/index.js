const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const ccxt = require("ccxt");
const axios = require("axios");
const bodyParser = require("body-parser");

const { MONGO_PRICE, GLASSNODE_API } = require("./config");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

//connect to mongodb via mongoose
const db = mongoose.connection;
mongoose.connect(
  "mongodb+srv://jarvisroot:jarvisroot@cluster0.svrdl.mongodb.net/price",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// notify error
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("you have successfully connected to database!!!!");
});

app.get("/price", (req, res) => {
  res.send("Hello World");
});

const priceSchema = new mongoose.Schema({
  date: String,
  open: Number,
  high: Number,
  low: Number,
  close: Number,
  volume: Number,
});

const Price = mongoose.model("Price", priceSchema);

const GNSchema = new mongoose.Schema({
  t: Number,
  v: Number,
});

const GNModel = mongoose.model("GNModel", GNSchema);

function GNAssignDataValue(t, v) {
  var upData = new Data();
  upData.t = t;
  upData.v = v;

  upData.save();
}

function priceAssignDataValue(date, open, high, low, close, volume) {
  var upData = new Price();
  (upData.date = date),
    (upData.open = open),
    (upData.high = high),
    (upData.low = low),
    (upData.close = close),
    (upData.volume = volume),
    upData.save();
}

function priceOnSuccess(response) {
  var array = response;
  var arrayLength = Object.keys(array).length;
  console.log(arrayLength);
  for (var i = 0; i <= arrayLength; i++) {
    var date = array.data[i].date;
    var open = array.data[i].opem;
    var high = array.data[i].high;
    var low = array.data[i].low;
    var close = array.data[i].close;
    var volume = array.data[i].volume;
    console.log(date + ": " + open + ", " + high + ", " + low + ", " + close);

    assignDataValue(name, desc, url);
  }
}

app.get("/GNActiveAddresses", (req, res) => {
  axios
    .get(
      "https://api.glassnode.com/v1/metrics/addresses/active_count?a=btc&&api_key=" +
        GLASSNODE_API
    )
    .then((data) => res.status(200).send(data))
    .catch((error) => {
      console.log(error);
    });
});

app.listen(4000, () => console.log("Example app listening on port 4000!"));
