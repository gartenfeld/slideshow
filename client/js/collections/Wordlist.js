

var Wordlist = Backbone.Collection.extend({

  model: Word,

  initialize: function() {
    this.loops = 1;
    this.interval = 0;
    this.cursor = 0;
    this.last = 0;
    this.init = true;
    this.on('played', this.repeatOrNext, this);
    this.fetchMoreWords(this.last);
    this.retrieving = false;
  },

  fetchMoreWords: function(pos) {
    if (!this.retrieving) {
      this.retrieving = true;
      $.get('/api/' + pos)
        .done(function (data) {
          this.last += data.words.length;
          _(data.words).each(this.createWordModel.bind(this));
          if (this.init) {
            this.init = false;
            this.playCurrentWord();
          }
          this.retrieving = false;
        }.bind(this));
    }
  },

  isWordPlayable: function(key) {
    if (Storage !== undefined) {
      return localStorage.getItem(key) !== 'false';
    }
    return true;
  },

  createWordModel: function(word) {
    var model = this.add({
      a: word.a,
      de: word.de,
      en: word.en,
      f: word.f,
      active: this.isWordPlayable(word.f)
    });
    this.trigger('add-to-list', model);
  },

  getCurrentWord: function() {
    return this.at(this.cursor);
  },

  playCurrentWord: function(delay) {
    delay = delay || 0;
    var timer = _.delay(function() {
      soundManager.stopAll();
      this.getCurrentWord().play();
      this.trigger('play');
      window.clearTimeout(timer);
    }.bind(this), delay);
  },

  isPlaying: function() {
    var soundId = this.getCurrentWord().get('f');
    return soundManager.getSoundById(soundId).playState;
  },

  repeatOrNext: function() {
    if (this.getCurrentWord().get('count') < this.loops) {
      this.playCurrentWord(this.interval);
    } else {
      this.playNextWord();
    }
  },
  
  modulo: function(origin, step) {
    var i = origin + step;
    return i > -1 ? i % this.size() : i + this.size();
  },

  findNextPlayableWord: function(step) {
    var target = this.modulo(this.cursor, step);
    while (this.at(target).get('active') === false) {
      if (target > this.size() - 4 && !this.retrieving) {
        this.fetchMoreWords(this.size());
      }
      target = this.modulo(target, step);
    }
    this.jumpToWord(target);
  },

  jumpToWord: function(target) {
    this.getCurrentWord().resetCount();
    this.cursor = target;
    if (this.cursor > this.size() - 4) {
      this.fetchMoreWords(this.size());
    }
  },

  playNextWord: function() {
    this.findNextPlayableWord(1);
    this.playCurrentWord(this.interval);
  },

  next: function() {
    this.findNextPlayableWord(1);
    this.playCurrentWord();
  },

  previous: function () {
    this.findNextPlayableWord(-1);
    this.playCurrentWord();
  },

  adjustRepetition: function(step) {
    var prop = this.loops + step;
    if (prop >= 1 && prop <= 20) {
      this.loops = prop;
    }
  },

  adjustPause: function(step) {
    var prop = this.interval + step;
    if (prop >= 0 && prop <= 5000) {
      this.interval = prop;
    }
  }

});
