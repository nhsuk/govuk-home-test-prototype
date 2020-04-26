const express = require('express')
const router = express.Router()

// Version 2 - Test kit type routing (Country)
router.post('/v2/action/test-kit-type', function (req, res) {
  var testKit = req.session.data['test-kit']

  if (testKit == "Request a home test kit"){
    res.redirect('https://www.gov.uk')
  } else {
    res.redirect('/v2/ask-for-a-coronavirus-test/test-centre')
  }

})

// Version 2 - Test kit type routing (Region)
router.post('/v3/action/test-kit-type', function (req, res) {
  var testKit = req.session.data['test-kit']

  if (testKit == "England"){
    res.redirect('/v3/ask-for-a-coronavirus-test/test-kit-type-regions')
  }
  else if (testKit == "Request a home test kit"){
    res.redirect('https://www.gov.uk')
  } else {
    res.redirect('/v3/ask-for-a-coronavirus-test/test-centre')
  }

})

module.exports = router
