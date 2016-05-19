function isActive(key) {
  if (Storage !== undefined) {
    return localStorage.getItem(key) !== 'false';
  }
  return true;
}

var Wordlist = Backbone.Collection.extend({

  model: Word,

  initialize: function () {
    this.loops = 1;
    this.interval = 0;
    this.cursor = 0;
    this.init = true;
    this.on('boundary', this.check, this);
    this.retrieve(this.cursor);
    this.retrieving = false;
  },

  retrieve: function (pos) {
    this.retrieving = true;
    $.get('/api/' + pos)
      .done(function (data) {
        _(data.words).each(this.build.bind(this));
        if (this.init) {
          this.init = false;
          this.present();
        }
        this.retrieving = false;
      }.bind(this));
  },

  build: function (word) {
    var model = this.add({
      a: word.a,
      de: word.de,
      en: word.en,
      f: word.f,
      active: isActive(word.f)
    });
    this.trigger('enlist', model);
  },

  current: function () {
    return this.at(this.cursor);
  },

  present: function(delay) {
    delay = delay || 0;
    var timer = _.delay(function () {
      soundManager.stopAll();
      this.current().play();
      this.trigger('play');
      window.clearTimeout(timer);
    }.bind(this), delay);
  },

  check: function () {
    if (this.current().get('count') < this.loops) {
      this.present(this.interval);
    } else {
      this.proceed();
    }
  },
  
  modulo: function (origin, step) {
    var i = origin + step;
    return i > -1 ? i % this.size() : i + this.size();
  },

  offset: function (step) {
    var target = this.modulo(this.cursor, step);
    while (this.at(target).get('active') === false) {
      if (target > this.size() - 4 && !this.retrieving) {
        this.retrieve(this.size());
      }
      target = this.modulo(target, step);
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
