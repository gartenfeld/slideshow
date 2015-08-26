var ListView = Backbone.View.extend({

  el: '#list',

  initialize: function () {
    this.listenTo(this.collection, 'enlist', this.insert);
  },

  insert: function (model) {
    console.log('Hi!');
    var item = new WordView({model: model}).render();
    this.$el.prepend(item);
  }

});
