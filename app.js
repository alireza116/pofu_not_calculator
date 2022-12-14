const express = require("express");
const path = require("path");
const app = express();

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static("public"));
const port = process.env.PORT || 4400;

app.get("/getThings", function (req, res) {
  res.send("works");
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
