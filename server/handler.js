var db = require('./resorted');
// var db = require('./lextra');

module.exports = function (req, res) {
  var cursor = parseInt(req.params.position);
  if (isNaN(cursor)) {
    res.send('Error');
  } else {
    cursor %= 3991; // limit to the size of the wordlist
    res.json({
      words: db.slice(cursor, cursor + 10)
    });
  }
};