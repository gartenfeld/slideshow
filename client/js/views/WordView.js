var WordView = Backbone.View.extend({

  className: 'list-line',

  template: _.template('<div class="line-button">' +
                         '<i class="fa fa-<%= status %> fa-1x"></i>' +
                      '</div>' + 
                      '<div class="line-text"><%= word %></div>'),

  render: function () {
    // status = 'bell' OR status = 'bell-slash'
    var status = true ? 'bell' : 'bell-slash',
        word = this.model.get('a') + ' ' + this.model.get('de');
        word = word.trim();
    var entry = this.template({
      word: word,
      status: status
    });
    this.$el.html(entry);
    return this.$el;
  }

});
