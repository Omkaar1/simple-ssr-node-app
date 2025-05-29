const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as view engine
app.set("view engine", "ejs");

// Serve static files
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Welcome to Node Js Application on AWS EC2",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
