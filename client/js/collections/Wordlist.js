var Wordlist = Backbone.Collection.extend({

  model: Word,

  initialize: function() {
    this.cursor = 0;
    this.loops = 3;
    this.interval = 500;
    // load initial words
    if (this.size() === 0) {
      this.fetchWords(this.cursor);
    }
    this.on('check', this.checkStatus, this);
    // kick off the playlist

    this.on('add', function(){
      this.at(this.cursor).play();
    }.bind(this));
  },

  fetchWords: function(pos) {
    $.get(
      '/api/' + pos,
      function (data) {
        var words = data.words;
        this.addWords(words);
      }.bind(this)
    );
  },

  addWords: function(words) {
    var list = this;
    _(words).each(function (word){
      list.add({
        a: word.a,
        de: word.de,
        en: word.en,
        f: word.f
      });
    });
  },

  checkStatus: function(){
    var current = this.at(this.cursor),
        count = current.get('count');
    if (count < this.loops) {
      this.playCurrent();
    } else {
      current.set('count', 0);
      // wait for the interval to elapse, then play again
      _.delay(this.next, this.interval);
    }
  },

  setCursor: function(offset) {
    if (this.cursor === 0 && offset === -1) {
      this.cursor = this.size();
    }
    this.cursor = (this.cursor + offset) % this.size();

    // if approaching the end of the list
    if (this.cursor > this.size() - 2) {
      // load more words
      this.fetchWords(this.size() + 1);
    }
  },

  playCurrent: function() {
    soundManager.stopAll();
    this.at(this.cursor).play();
  },

  next: function() {
    this.setCursor(1);
    this.playCurrent();
  },

  previous: function() {
    this.setCursor(-1);
    this.playCurrent();
  }

});
