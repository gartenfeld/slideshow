var Word = Backbone.Model.extend({

  defaults: {
    a: '',
    de: '',
    en: '',
    f: '',
    count: 0
  },

  initialize: function() {

    // load the sound file when each model is created
    soundManager.createSound({
      id: this.get('f'),
      url: 'http://deut-rosson.rhcloud.com/lextra/' + this.get('f') + ".mp3",
      autoLoad: false,
      stream: true, 
      whileloading: function() { 
        document.title = "Loading " + this.id; 
      },
      autoPlay: false,
      onload: function() {
        document.title = "Slideshow"; 
      },
      volume: 75
    });

  },

  play: function() {
    var sound = this;
    // console.log("Playing: ", sound.get('f'));
    soundManager.play(sound.get('f'), {
      onfinish: function(){
        sound.set('count', sound.get('count') + 1);
        sound.trigger('check');
      }
    });
  }

});