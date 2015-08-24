var WordView = Backbone.View.extend({

  className: 'list-line',

  template: _template('<div class="line-button">' +
                         '<i class="fa fa-<%= status %> fa-1x"></i>' +
                      '</div>' + 
                      '<div class="line-text"><%= word %></div>'),

  initialize: function () {

  },

  render: function () {

    // status = 'bell' OR status = 'bell-slash'
    // word = (article + this.model.get('word')) .trim

    // var entry = this.template({
    //   word: word,
    //   status: status
    // });
    // this.$el.html(entry)
    return this.$el;
  }

});
