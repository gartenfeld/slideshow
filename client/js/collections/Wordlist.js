var Wordlist = Backbone.Collection.extend({

  model: Word,

  initialize: function () {
    this.loops = 1;
    this.interval = 0;
    this.cursor = 0;
    this.init = true;
    this.on('boundary', this.check, this);
    this.retrieve(this.cursor);
  },

  retrieve: function (pos) {
    pos += 10; // for testing
    $.get('/api/' + pos)
      .done(function (data) {
        _(data.words).each(this.build.bind(this));
        if (this.init) {
          this.init = false;
          this.present();
        }
      }.bind(this));
  },

  build: function (word) {
    // update the count of blocked words
    var model = this.add({
      a: word.a,
      de: word.de,
      en: word.en,
      f: word.f,
      active: true
    });
    this.trigger('enlist', model);
    // load sound if word is `active`
  },

  current: function () {
    return this.at(this.cursor);
  },

  present: function(delay) {
    delay = delay || 0;
    _.delay(function () {
      soundManager.stopAll();
      this.current().play();
      this.trigger('play');
    }.bind(this), delay);
  },

  check: function () {
    if (this.current().get('count') < this.loops) {
      this.present(this.interval);
    } else {
      this.proceed();
    }
  },

  offset: function (step) {
    var inquire = function (origin) {
      var i = origin + step;
      return i > -1 ? i % this.size() : i + this.size();
    }.bind(this);
    var target = inquire(this.cursor);
    while (this.at(target).get('active') === false) {
      target = inquire(target);
    }
    this.repoint(target);
  },

  repoint: function (target) {
    this.current().reset();
    this.cursor = target;
    if (this.cursor > this.size() - 4) {
      this.retrieve(this.size());
    }
  },

  proceed: function () {
    this.offset(1);
    this.present(this.interval);
  },

  next: function () {
    this.offset(1);
    this.present();
  },

  previous: function () {
    this.offset(-1);
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
