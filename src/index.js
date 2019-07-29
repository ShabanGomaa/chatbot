require("dotenv").config({ path: "variables.env" });

const express = require("express");
const bodyParser = require("body-parser");

const webhook = require("./webhook");
const messageWebhook = require("./message-webhook");

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", webhook);
app.post("/", messageWebhook);

app.listen(PORT, () =>
  console.log(`Express server is listening on port: ${PORT}`)
);
