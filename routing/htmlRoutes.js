var express = require('express');
var app = express();

var path = require('path');

app.use(express.static("public"));

module.exports = function (app) {

    app.get('/home', function (req, res) {
        if (req.session.user_id && req.cookies.user_sid) {
          res.render(path.join(__dirname, '/../public/index.html'))
        }
        else {
          res.render("home")
        }
      });

}