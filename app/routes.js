const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Test kit type routing
router.post('/v2/action/test-kit-type', function (req, res) {
  var testKit = req.session.data['test-kit']

  if (testKit == "By visiting a regional test site in England"){
    res.redirect('/v2/ask-for-a-coronavirus-test/test-kit-type-regions')
  }
  else if (testKit == "By requesting a home test kit"){
    res.redirect('https://www.gov.uk')
  } else {
    res.redirect('/v2/ask-for-a-coronavirus-test/test-centre')
  }

})

module.exports = router
