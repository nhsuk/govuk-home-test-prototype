const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Test kit type routing
router.post('/v2/action/test-kit-type', function (req, res) {
  var testKit = req.session.data['test-kit']

  if (testKit == "By visiting a drive-through test centre"){
    res.redirect('/v2/get-a-test/test-centre')
  }
  else if (testKit == "By requesting a home test kit"){
    res.redirect('https://www.gov.uk')
  } else {
    console.log("Validation error")
  }

})

module.exports = router
