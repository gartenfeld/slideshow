var WordView = Backbone.View.extend({

  className: 'list-line',

  template: _.template('<div class="line-button">' +
                         '<i class="fa fa-<%= status %> fa-1x"></i>' +
                      '</div>' + 
                      '<div class="line-text"><%= word %></div>'),

  initialize: function () {

  },

  render: function () {
    // status = 'bell' OR status = 'bell-slash'
    var status = 'bell';
    var word = this.model.get('a') + ' ' + this.model.get('de');
        word = word.trim();
    var entry = this.template({
      word: word,
      status: status
    });
    console.log(entry);
    this.$el.html(entry);
    return this.$el;
  }

});
