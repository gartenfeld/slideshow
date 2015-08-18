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
    this.renderLoops();
    this.renderInterval();
    $('#mask').click(this.slide.bind(this));
  },

  previous: function () {
    this.collection.previous();
  },

  next: function () {
    this.collection.next();
  },

  more: function () { 
    if (this.collection.loops < 20 ) {
      this.collection.loops++;
      this.renderLoops();
    }
  },

  less: function () { 
    if (this.collection.loops > 1) {
      this.collection.loops--;
      this.renderLoops();
    }
  },

  renderLoops: function () {
    this.$el.find('.loops').text(this.collection.loops)
      .css({ color: '#eee', opacity: 1 })
      .animate({ opacity: 0.3 }, 250);
  },

  slower: function () { 
    if (this.collection.interval < 5000) {
      this.collection.interval += 500;
      this.renderInterval();
    }
  },

  faster: function () { 
    if (this.collection.interval > 0) {
      this.collection.interval -= 500;
      this.renderInterval();
    }
  },

  renderInterval: function () {
    this.$el.find('.interval').text(this.collection.interval/1000)
      .css({ color: '#eee', opacity: 1 })
      .animate({ opacity: 0.3 }, 250);
  },

  playing: function () {
    var currentSound = this.collection.at(this.collection.cursor),
        soundId = currentSound.get('f'),
        playing = soundManager.getSoundById(soundId).playState;
    return playing === 1;
  },

  toggle: function () {
    if (this.playing()) {
      soundManager.stopAll();
      this.$el.find('.play-pause')
        .addClass("fa-play")
        .removeClass("fa-pause");
    } else {
      this.collection.playCurrent();
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