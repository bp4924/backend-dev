// index.js
// where your node app starts

// init project
const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});
/* FROM GITHUB/yacob-harkati
app.get("/api/:date?", function (req, res) {
  let calcDate = isNaN(req.params.date) ? req.params.date : parseInt(req.params.date)
  console.log(calcDate)
  let currentDate = new Date(calcDate)
  let errorResponse = {"error": `${currentDate}`}
  let validResponse = {"unix": currentDate.getTime(), "utc": `${currentDate.toUTCString()}`}
  console.log(currentDate)
  currentDate == "Invalid Date" ? res.json(errorResponse) : res.json(validResponse); 
});
*/

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
