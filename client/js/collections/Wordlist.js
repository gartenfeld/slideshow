var Wordlist = Backbone.Collection.extend({

  model: Word,

  initialize: function () {
    this.cursor = 0;
    this.loops = 1;
    this.interval = 0;
    this.init = true;
    this.on('check', this.checkStatus, this);
    this.fetchWords(this.cursor);
  },

  fetchWords: function (pos) {
    var list = this;
    pos += 10;
    $.get('/api/' + pos)
      .done(function (data) {
        list.addWords(data.words);
      });
  },

  addWords: function (words) {
    var list = this;
    _(words).each(function (word) {
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

  checkStatus: function () {
    var current = this.at(this.cursor),
        count = current.get('count');
    if (count < this.loops) {
      _.delay(this.playCurrent.bind(this), this.interval);
    } else {
      current.set('count', 0);
      this.next();
    }
  },

  setCursor: function (offset) {
    if (this.cursor === 0 && offset === -1) {
      this.cursor = this.size();
    }
    this.cursor = (this.cursor + offset) % this.size();
    // load more words when approaching the end of the list
    if (this.cursor > this.size() - 4) {
      this.fetchWords(this.size());
    }
  },

  playCurrent: function() {
    soundManager.stopAll();
    this.at(this.cursor).play();
    this.trigger('play');
  },

  next: function () {
    this.at(this.cursor).set('count', 0);
    this.setCursor(1);
    _.delay(this.playCurrent.bind(this), this.interval);
  },

  previous: function () {
    this.at(this.cursor).set('count', 0);
    this.setCursor(-1);
    this.playCurrent();
  }

});
