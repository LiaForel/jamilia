const router = require('express').Router(); // create express router
let information = require('../models/information.model'); // require mongoose model

// endpoint HHTP get request
router.route('/').get((req, res) => {
  information
    .find() // mongoose method to fetch users if exists
    .then(information => res.json(information)) // return users in json format
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/newInfo').post((req, res) => {
  // post request to add a new user
  const username = req.body.username;
  const description = req.body.description;
  const dataSource = req.body.dataSource;
  const date = Date.parse(req.body.date);

  const newInformation = new information({
    username,
    description,
    dataSource,
    date
  });

  newInformation
    .save() // save a new user to the database
    .then(() => res.json('Your Information added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  information
    .findById(req.params.id)
    .then(information => res.json(information))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  information
    .findByIdAndDelete(req.params.id)
    .then(information => res.json('Information deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  information
    .findById(req.params.id)
    .then(information => {
      information.username = req.body.username;
      information.description = req.body.description;
      information.dataSource = req.body.dataSource;
      information.date = Date.parse(req.body.date);

      information
        .save() // save a new user to the database
        .then(() => res.json('Your Information is Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
