var AUDIO_HOST = 'https://dbx.firebaseapp.com/audio/lextra/';

var Word = Backbone.Model.extend({

  defaults: {
    a:  '',
    de: '',
    en: '',
    f:  '',
    count: 0
  },

  initialize: function () {
    var sound = soundManager.createSound({
      id: this.get('f'),
      url: AUDIO_HOST + this.get('f') + '.mp3'
    });
    if (this.get('active')) {
      sound.load();
    }
  },

  play: function () {
    soundManager.play(this.get('f'), {
      onfinish: function () {
        this.set('count', this.get('count') + 1);
        this.trigger('played');
      }.bind(this)
    });
  },

  resetCount: function () {
    this.set('count', 0);
  }

});