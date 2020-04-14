const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//require routes here
const postRouter = require("./routes/postRouter");

//calling middleware to log network activity
// const { logger } = require('./middleware');

//using express()
const app = express();
const port = process.env.PORT || 5000;

//use json format and logger middleware
app.use(bodyParser.json());

// logger here to keep track of network activity
// app.use(logger);

//app.use( all api routes) here
app.use("/api", postRouter);


// general
// app.use(express.static(path.join(__dirname, "../build")));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// general
app.get("*", function(req, res) {
  console.log("you got it bro XD");
  res.send("This is working!!!!")
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port} :D`);
});