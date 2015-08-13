var AppView = Backbone.View.extend({

  el: '#screen',

  events: {
    'click .previous': 'previous',
    'click .next': 'next',
    'click .loop-plus': 'more',
    'click .loop-minus': 'less',
    'click .interval-plus': 'slower',
    'click .interval-minus': 'faster',
    'click .play-pause': 'toggle'
  },

  initialize: function () {
    this.listenTo(this.collection, 'play', this.render);
    this.renderLoops();
    this.renderInterval();
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

  toggle: function () {
    var currentSound = this.collection.at(this.collection.cursor),
        soundId = currentSound.get('f'),
        playing = soundManager.getSoundById(soundId).playState;
    if (playing === 1) {
      soundManager.stopAll();
    } else {
      this.collection.playCurrent();
    }
    this.$el.find('.play-pause')
      .toggleClass("fa-pause")
      .toggleClass("fa-play");
  },

  render: function () {
    var cursor = this.collection.cursor,
        current = this.collection.at(cursor),
        article = current.get('a') || ' ',
        word = current.get('de'),
        gloss = current.get('en');
    this.$el.find('#article').text(article);
    this.$el.find('.gloss').text(gloss);
    this.$el.find('.word').text(word)
      .css({ opacity: 0 })
      .animate({ opacity: 1 }, 250);
  }

});
