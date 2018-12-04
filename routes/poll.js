const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '663943',
  key: '07b2349709a62a89095b',
  secret: 'd56e747592f57bf369ca',
  cluster: 'us2',
  encrypted: true
});

router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/', (req, res) => {
    pusher.trigger('political-poll', 'political-vote', {
        points: 1,
        os: req.body.os
      });

return res.json({success: true, message: "Thank you for voting!"});

});


module.exports = router;