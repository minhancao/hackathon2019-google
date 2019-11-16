const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const StreamChat = require("stream-chat").StreamChat;
const jwt = require("jsonwebtoken");

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
  console.log(req.params.id);
  const serverSideClient = new StreamChat(
    "fanzgdkaeqat",
    "hm8yzjywajqgrt3mkbamtrruzyqswfsjwaqceuaamckqjqdq942cjb873f3frpks"
  );
  const token = serverSideClient.createToken(req.params.id);

  jwt.sign(
    {
      user_id: req.params.id,
      resource: "*",
      action: "*",
      feed_id: "*"
    },
    "gbuwzxfznwem7yumy7qbhtjf8gh2h4fyg3gc38bke9q4hrxex9p4b9prctr8j68a",
    { expiresIn: 3600 },
    (err, token) => {
      if (err) throw err;
      res.send(token);
    }
  );
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
