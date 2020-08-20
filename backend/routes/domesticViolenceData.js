const router = require('express').Router(); // create express router
let domesticViolenceData = require('../models/domesticviolencedata.model'); // require mongoose model

// endpoint HHTP get request
router.route('/').get((req, res) => {
  domesticViolenceData
    .find() // mongoose method to fetch users if exists
    .then(domesticViolenceData => res.json(domesticViolenceData)) // return users in json format
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/newdvData').post((req, res) => {
  // post request to add a new user
  const dateOfAbuse = Date.parse(req.body.date);
  const victimName = req.body.victimName;
  const abuserName = req.body.abuserName;
  const relationshipToVictim = req.body.relationshipToVictim;
  const placeOfAbuse = req.body.placeOfAbuse;
  const factSource = req.body.factSource;
  const policeReaction = req.body.policeReaction;
  const abuserPunished = req.body.abuserPunished;
  const caseStatus = req.body.caseStatus;
  const date = Date.parse(req.body.date);

  const newDomesticViolenceData = new domesticViolenceData({
    dateOfAbuse,
    victimName,
    abuserName,
    relationshipToVictim,
    placeOfAbuse,
    factSource,
    policeReaction,
    abuserPunished,
    caseStatus,
    date
  });

  newDomesticViolenceData
    .save() // save a new user to the database
    .then(() => res.json('Your domesticViolenceData added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  domesticViolenceData
    .findById(req.params.id)
    .then(domesticViolenceData => res.json(domesticViolenceData))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  domesticViolenceData
    .findByIdAndDelete(req.params.id)
    .then(domesticViolenceData => res.json('domesticViolenceData deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  domesticViolenceData
    .findById(req.params.id)
    .then(domesticViolenceData => {
      domesticViolenceData.dateOfAbuse = Date.parse(req.body.date);
      domesticViolenceData.victimName = req.body.victimName;
      domesticViolenceData.abuserName = req.body.abuserName;
      domesticViolenceData.relationshipToVictim = req.body.relationshipToVictim;
      domesticViolenceData.placeOfAbuse = req.body.placeOfAbuse;
      domesticViolenceData.factSource = req.body.factSource;
      domesticViolenceData.policeReaction = req.body.policeReaction;
      domesticViolenceData.abuserPunished = req.body.abuserPunished;
      domesticViolenceData.caseStatus = req.body.caseStatus;
      domesticViolenceData.date = Date.parse(req.body.date);

      domesticViolenceData
        .save() // save a new user to the database
        .then(() => res.json('Your domesticViolenceData is Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
