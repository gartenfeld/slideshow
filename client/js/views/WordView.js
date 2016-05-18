var WordView = Backbone.View.extend({

  className: 'list-line',

  events: {
    'click .line-text': 'retrace',
    'click .line-toggle': 'toggle'
  },

  template: _.template('<div class="line-toggle">' +
                         '<i class="fa fa-<%= icon %> fa-1x"></i>' +
                       '</div>' + 
                       '<div class="line-text<%= strike %>"><%= word %></div>'),

  initialize: function () {
    this.listenTo(this.model, 'change:active', this.render);
  },

  retrace: function () {
    if (this.model.get('active')) {
      var target = this.collection.indexOf(this.model);
      this.collection.repoint(target);
      this.collection.present();
    }
  },

  toggle: function () {
    var status = this.model.get('active');
    var target = this.collection.indexOf(this.model);
    this.model.set('active', !status);
    if (Storage !== undefined) {
      localStorage.setItem(this.model.get('f'), !status);
    }
    if (status && target > this.collection.size() - 4) {
      this.collection.retrieve(this.collection.size());
    }
  },

  render: function () {
    var icon = 'bell', 
        strike = '',
        word = this.model.get('a') + ' ' + this.model.get('de');
        word = word.trim();
    if (!this.model.get('active')) {
      icon = 'bell-slash';
      strike = ' skipped';
    }
    var entry = this.template({
      word: word,
      icon: icon,
      strike: strike
    });
    this.$el.html(entry);
    return this.$el;
  }

});
