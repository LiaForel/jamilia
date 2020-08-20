const router = require('express').Router(); // create express router
let members = require('../models/members.model'); // require mongoose model

// endpoint HHTP get request
router.route('/').get((req, res) => {
  members
    .find() // mongoose method to fetch users if exists
    .then(members => res.json(members)) // return users in json format
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/newMember').post((req, res) => {
  // post request to add a new user
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const role = req.body.role;
  const email = req.body.email;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newMember = new members({
    firstName,
    lastName,
    role,
    description,
    email,
    date
  });

  newMember
    .save() // save a new user to the database
    .then(() => res.json('Your Membership is added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  members
    .findById(req.params.id)
    .then(members => {
      members.firstName = req.body.firstName;
      members.lastName = req.body.lastName;
      members.role = req.body.role;
      members.email = req.body.email;
      members.description = req.body.description;
      members.date = Date.parse(req.body.date);

      members
        .save() // save a new user to the database
        .then(() => res.json('Your Information is Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
