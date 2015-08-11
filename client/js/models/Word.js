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
    var soundObj = soundManager.createSound({
      id: this.get('f'),
      url: 'http://deut-rosson.rhcloud.com/lextra/' + this.get('f') + ".mp3"
    });
    soundObj.load();
    this.set('sound', soundObj);
  },

  play: function() {
    var soundModel = this;
    this.get('sound').play({
      onfinish: function(){
        soundModel.set('count', sound.get('count') + 1);
        soundModel.trigger('check');
      }
    });
  }

});