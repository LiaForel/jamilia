const router = require('express').Router(); // create express router
let User = require('../models/user.model'); // require mongoose model

// endpoint HHTP get request
router.route('/').get((req, res) => {
  User.find() // mongoose method to fetch users if exists
    .then(users => res.json(users)) // return users in json format
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/registration').post((req, res) => {
  // post request to add a new user
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save() // save a new user to the database
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
