const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("<h1> Hello! </h1>");
});

app.listen(3000, () => {
  console.log("Server started on 3000");
});
