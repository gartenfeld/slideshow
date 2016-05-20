var ListView = Backbone.View.extend({

  el: '#list',

  initialize: function() {
    this.listenTo(this.collection, 'add-to-list', this.addWordToCollection);
  },

  addWordToCollection: function(model) {
    var item = new WordView({
      model: model,
      collection: this.collection
    });
    var $inserted = item.render();
    this.$el.prepend($inserted);
    $inserted.hide().slideDown(500);
  }

});
