var AUDIO_HOST = 'http://deut-rosson.rhcloud.com/lextra/';

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
      url: AUDIO_HOST + this.get('f') + '.mp3'
    }).load();
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