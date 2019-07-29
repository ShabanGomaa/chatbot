const webhook = (req, res) => {
  let VERIFY_TOKEN = "challenged-bot";

  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  if (mode && token === VERIFY_TOKEN) {
    // OK, response with fetching the data
    res.status(200).send(challenge);
  } else {
    // Forbidden, the server reject to give the proper response
    res.sendStatus(403);
  }
};

module.exports = webhook;
