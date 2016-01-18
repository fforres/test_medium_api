var express = require('express');
var router = express.Router();
var medium = require('medium-sdk');
var client = new medium.MediumClient({
  clientId: '5d8916e4180',
  clientSecret: '17d2d29ef88991b74c7fec7fc6e29d998a15570e'
})

var url = client.getAuthorizationUrl('secretState', 'https://fforr.es/callback/medium', [
  medium.Scope.BASIC_PROFILE,
  medium.Scope.PUBLISH_POST,
  medium.Scope.LIST_PUBLICATIONS,
  medium.Scope.UPLOAD_IMAGE
]);

/* GET users listing. */
router.get('/get', function(req, res, next) {
  res.redirect(url);
});


router.get('/medium', function(req, res, next) {
  debugger;
  client.ExchangeAuthorizationCode('YOUR_AUTHORIZATION_CODE', function (err, token) {
    debugger;
    client.getUser(function (err, user) {
      debugger;
    })
  })
})

module.exports = router;
