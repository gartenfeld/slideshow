var ControlsView = Backbone.View.extend({

  el: '#controls',

  events: {
    'click .previous': 'previous',
    'click .next': 'next',
    'click .loop-plus': 'more',
    'click .loop-minus': 'less',
    'click .interval-plus': 'slower',
    'click .interval-minus': 'faster',
    'click .play-pause': 'toggle',
    'click .history': 'slide'
  },

  initialize: function () {
    this.render('.loops');
    this.render('.interval');
    $('#mask').click(this.slide.bind(this));
  },

  previous: function () {
    this.collection.previous();
  },

  next: function () {
    this.collection.next();
  },

  more: function () { 
    this.collection.reloop(1);
    this.render('.loops');
  },

  less: function () { 
    this.collection.reloop(-1);
    this.render('.loops');
  },

  slower: function () { 
    this.collection.respeed(500); 
    this.render('.interval');
  },

  faster: function () { 
    this.collection.respeed(-500); 
    this.render('.interval');
  },

  render: function (el) {
    var settings = {
      '.loops': {
        num: this.collection.loops,
        unit: 1
      },
      '.interval': {
        num: this.collection.interval,
        unit: 1000
      }
    };
    var display = settings[el].num / settings[el].unit;
    this.$el.find(el).text(display)
      .css({ color: '#eee', opacity: 1 })
      .animate({ opacity: 0.3 }, 250);
  },

  playing: function () {
    var soundId = this.collection.current().get('f');
    return soundManager.getSoundById(soundId).playState;
  },

  toggle: function () {
    if (!!this.playing()) {
      soundManager.stopAll();
      this.$el.find('.play-pause')
        .addClass("fa-play")
        .removeClass("fa-pause");
    } else {
      this.collection.present();
      this.$el.find('.play-pause')
        .addClass("fa-pause")
        .removeClass("fa-play");
    }
  },

  slide: function () {
    $('#mask').toggleClass("active");
    $('#list').toggleClass("active");
  }

});