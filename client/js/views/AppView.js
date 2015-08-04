var AppView = Backbone.View.extend({

  el: '#screen',

  events: {
    'click .previous': 'previous',
    'click .next': 'next',
    'click .loop-plus': 'more',
    'click .loop-minus': 'less'
  },

  initialize: function() {
    this.listenTo(this.collection, 'play', this.render);
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
    }
  },

  less: function () { 
    if (this.collection.loops > 2) {
      this.collection.loops--;
    }
  },

  render: function() {
    var cursor = this.collection.cursor,
        current = this.collection.at(cursor),
        article = current.get('a') || ' ',
        word = current.get('de'),
        gloss = current.get('en');
    this.$el.find('#article').text(article);
    this.$el.find('.gloss').text(gloss);
    this.$el.find('.word').text(word)
      .css({
        opacity: 0,
      })
      .animate({
        opacity: 1,
      }, 250);
  }

});