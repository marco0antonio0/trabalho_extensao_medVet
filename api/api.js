const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

module.exports = app;
