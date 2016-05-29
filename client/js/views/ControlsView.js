var ControlsView = Backbone.View.extend({

  el: '#controls',

  events: {
    'click .previous': 'previous',
    'click .next': 'next',
    'click .loop-plus': 'repeatMore',
    'click .loop-minus': 'repeatFewer',
    'click .interval-plus': 'makeGapLonger',
    'click .interval-minus': 'makeGapShorter',
    'click .play-pause': 'togglePause',
    'click .history': 'toggleHistory'
  },

  keyupHandler: function(event) {
    var keyEventMap = {
      32: this.togglePause,
      37: this.previous,
      39: this.next
    };
    var action = keyEventMap[event.which];
    if (typeof action === 'function') {
      action.call(this);
      event.preventDefault();
    }
  },

  initialize: function () {
    this.render('.loops');
    this.render('.interval');
    $('#mask').click(this.toggleHistory.bind(this));
    this.$play = this.$el.find('.play-pause');
    this.listenTo(this.collection, 'play', this.showAsUnpaused);
    $('body').keyup(this.keyupHandler.bind(this));
  },

  showAsUnpaused: function() {
    this.$play.addClass('fa-pause')
      .removeClass('fa-play');
  },

  showAsPaused: function() {
    this.$play.addClass('fa-play')
      .removeClass('fa-pause');
  },

  previous: function() {
    this.collection.previous();
  },

  next: function() {
    this.collection.next();
  },

  repeatMore: function() {
    this.collection.adjustRepetition(1);
    this.render('.loops');
  },

  repeatFewer: function() {
    this.collection.adjustRepetition(-1);
    this.render('.loops');
  },

  makeGapLonger: function() {
    this.collection.adjustPause(500); 
    this.render('.interval');
  },

  makeGapShorter: function() {
    this.collection.adjustPause(-500); 
    this.render('.interval');
  },

  render: function(el) {
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

  togglePause: function() {
    if (this.collection.isPlaying()) {
      soundManager.stopAll();
      this.showAsPaused();
    } else {
      this.collection.playCurrentWord();
    }
  },

  toggleHistory: function() {
    $('#mask').toggleClass('active');
    $('#list').toggleClass('active');
  }

});