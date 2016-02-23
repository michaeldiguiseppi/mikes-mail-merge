var express = require('express');
var router = express.Router();
var helpers = require('./utility');





router.get('/', function(req, res, next) {
  res.render('index', {emails: []});
});


router.post('/', function(req, res, next) {
    var firstName, lastName, emailAddress;
    var subjBody = req.body;
    var eachEmail = req.body.emailName.split('\r\n');
    var result = eachEmail.map(function(email) {
        var splitStr = email.split(',');
        firstName = splitStr[0].charAt(0).toUpperCase() + splitStr[0].substr(1).toLowerCase();
        lastName = splitStr[1].charAt(0).toUpperCase() + splitStr[1].substr(1).toLowerCase();
        emailAddress = splitStr[2];
        var options = {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress
        };
        return options;
    }).map(function (header) {
        return {
            header: header.firstName + ' ' + header.lastName + ' <' + header.emailAddress + '>',
            subject: req.body.emailSubject,
            body: helpers.formatBody(helpers.buildBody(req.body.emailBody, header))
        };
    });
    res.render('index', { emails: result, initial: req.body });
});


module.exports = router;
