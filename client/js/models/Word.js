var Word = Backbone.Model.extend({

  defaults: {
    a:  '',
    de: '',
    en: '',
    f:  '',
    count: 0
  },

  initialize: function () {
    soundManager.createSound({
      id: this.get('f'),
      url: 'http://deut-rosson.rhcloud.com/lextra/' + this.get('f') + ".mp3"
    }).load();
    this.trigger('enlist', this);
  },

  play: function () {
    soundManager.play(this.get('f'), {
      onfinish: function () {
        this.set('count', this.get('count') + 1);
        this.trigger('boundary');
      }.bind(this)
    });
  },

  reset: function () {
    this.set('count', 0);
  }

});

// url: 'http://lxtr.herokuapp.com/lextra/' + this.get('f') + ".mp3"

