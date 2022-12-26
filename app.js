const express = require("express");
const path = require("path");

const app = express();
const port = process.env.port || 3000;

app.use("/public", express.static(__dirname + "/public"));

const options = {
  root: path.join(__dirname),
};

app.get("/", (req, res) => {
  const filename = "/public/index.html";
  res.sendFile(filename, options, (err) => {
    if (err) throw err;
  });
});

app.get("/thanks", (req, res) => {
  const filename = "/public/thankspage/thanks.html";
  res.sendFile(filename, options, (err) => {
    if (err) throw err;
  });
});

app.listen(port, () => {
  console.log("Started...");
});
