const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const StreamChat = require("stream-chat").StreamChat;

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Routes
app.get("/jwt/:id", (req, res) => {
  const serverSideClient = new StreamChat(
    "fanzgdkaeqat",
    "hm8yzjywajqgrt3mkbamtrruzyqswfsjwaqceuaamckqjqdq942cjb873f3frpks"
  );
  const token = serverSideClient.createToken(req.params.id);
  res.send(token);
});

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
