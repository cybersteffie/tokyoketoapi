// SET UP HTML PAGE W/ EXPRESS

var express = require("express");
var app = express();
var path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(400, () => {
  console.log("Listening on port 400!");
});
//   .on('error', (err) => {throw err;
// });;

app.use(express.static("public"));
