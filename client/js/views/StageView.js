var StageView = Backbone.View.extend({

  el: '#stage',

  initialize: function() {
    this.listenTo(this.collection, 'play', this.render);
  },

  render: function() {
    var current = this.collection.getCurrentWord(),
        article = current.get('a') || ' ',
        word = current.get('de'),
        gloss = current.get('en');
    this.$el.find('.article').text(article);
    this.$el.find('.gloss').text(gloss);
    this.$el.find('.word').text(word)
      .css({ opacity: 0 })
      .stop().delay(250)
      .animate({ opacity: 1 }, 250);
  }

});
