var Word = Backbone.Model.extend({

  defaults: {
    a: '',
    de: '',
    en: '',
    f: '',
    count: 0
  },

  initialize: function() {
    // initiate the sound object
    soundManager.createSound({
      id: this.get('f'),
      url: 'http://deut-rosson.rhcloud.com/lextra/' + this.get('f') + ".mp3",
      autoLoad: false,
      autoPlay: false,
      stream: true, 
      volume: 80
    });
  },

  play: function() {
    var sound = this;
    soundManager.play(sound.get('f'), {
      onfinish: function(){
        sound.set('count', sound.get('count') + 1);
        sound.trigger('check');
      }
    });
  }

});