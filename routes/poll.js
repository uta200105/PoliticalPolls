const express = require('express');
const router = express.Router();

const Pusher = require('pusher');



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