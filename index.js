const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Routes
app.get("/customers", (req, res) => {
  res.send("customer data");
});

app.listen(port, () => {
  console.log(`application listening to port ${port}`);
});
