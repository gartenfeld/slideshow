var Wordlist = Backbone.Collection.extend({

  model: Word,

  initialize: function() {
    this.cursor = 0;
    this.loops = 1;
    this.interval = 0;
    this.init = true;
    // load initial words
    if (this.size() === 0) {
      this.fetchWords(this.cursor);
    }
    this.on('check', this.checkStatus, this);
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
    if (this.init) {
      this.init = false;
      this.playCurrent();
    }
  },

  checkStatus: function(){
    var current = this.at(this.cursor),
        count = current.get('count');
    if (count < this.loops) {
      // wait for the interval to elapse, then play again
      _.delay(this.playCurrent.bind(this), this.interval);
    } else {
      current.set('count', 0);
      this.next();
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
    this.trigger('play');
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
