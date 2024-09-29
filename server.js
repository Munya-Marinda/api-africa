// server.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve the JSON file
app.get("/api/data", (req, res) => {
  const jsonData = fs.readFileSync(path.join(__dirname, "/data/data.json"));
  res.setHeader("Content-Type", "application/json");
  res.send(jsonData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
