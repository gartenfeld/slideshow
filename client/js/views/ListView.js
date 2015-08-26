var ListView = Backbone.View.extend({

  el: '#list',

  initialize: function () {
    this.listenTo(this.collection, 'enlist', this.insert);
  },

  insert: function (model) {
    var item = new WordView({model: model});
    this.$el.prepend(item.render());
  }

});
