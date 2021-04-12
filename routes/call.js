const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const VoiceResponse = twilio.twiml.VoiceResponse;

const config = require('../config');

// POST /calls/connect
router.post('/connect', twilio.webhook({validate: false}), function(req, res, next) {
  var callerId = config.twilioPhoneNumber;
  var twiml = new VoiceResponse();

  var dial = twiml.dial({callerId : callerId});
  dial.client({}, "someone_with_some_name_from_db");

  res.send(twiml.toString());
});

module.exports = router;
