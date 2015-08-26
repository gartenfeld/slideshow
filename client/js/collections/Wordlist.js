var Wordlist = Backbone.Collection.extend({

  model: Word,

  initialize: function () {
    this.loops = 1;
    this.interval = 0;
    this.cursor = 0;
    this.init = true;
    this.on('boundary', this.check, this);
    this.on('enlist', this.enlist, this);
    this.retrieve(this.cursor);
  },

  retrieve: function (pos) {
    pos += 10; // for testing
    $.get('/api/' + pos)
      .done(function (data) {
        this.include(data.words);
      }.bind(this));
  },

  include: function (words) {
    // reset tally of blocked words
    _(words).each(this.build.bind(this));
    // decide whether to fetch again
    if (this.init) {
      this.init = false;
      this.present();
    }
  },

  build: function (word) {
    // tally count of blocked words
    var model = this.add({
      a: word.a,
      de: word.de,
      en: word.en,
      f: word.f
    });
    // optionally load the sound file
  },

  enlist: function (model) {
    console.log('Hi!!!');
    this.trigger('enlist', model);
  },

  current: function () {
    return this.at(this.cursor);
  },

  check: function () {
    if (this.current().get('count') < this.loops) {
      this.resume();
    } else {
      this.proceed();
    }
  },

  repoint: function (offset) {
    this.current().reset();
    var i = this.cursor + offset;
    this.cursor = i > -1 ? i % this.size() : i + this.size();
    if (this.cursor > this.size() - 4) {
      this.retrieve(this.size());
    }
  },

  present: function() {
    soundManager.stopAll();
    this.current().play();
    this.trigger('play');
  },

  resume: function () {
    _.delay(this.present.bind(this), this.interval);
  },

  proceed: function () {
    this.repoint(1);
    this.resume();
  },

  next: function () {
    this.repoint(1);
    this.present();
  },

  previous: function () {
    this.repoint(-1);
    this.present();
  },

  reloop: function (step) {
    var prop = this.loops + step;
    if (prop >= 1 && prop <= 20) {
      this.loops = prop;
    }
  },

  respeed: function (step) {
    var prop = this.interval + step;
    if (prop >= 0 && prop <= 5000) {
      this.interval = prop;
    }
  }

});
