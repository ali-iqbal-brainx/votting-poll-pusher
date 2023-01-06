const express = require('express');
const router = express.Router();

const Pusher = require('pusher');


const pusher = new Pusher({
  appId: "1534544",
  key: "f0fb6f1b6cdd382dbecb",
  secret: "a397907b30398cbca5d7",
  cluster: "ap2",
  useTLS: true
});


router.post('/', (req, res) => {

  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  });

  return res.json({ success: true, message: 'Thank you for voting' });
});

module.exports = router;
