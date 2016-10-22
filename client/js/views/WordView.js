var WordView = Backbone.View.extend({

  className: 'list-line',

  events: {
    'click .line-text': 'playClickedWord',
    'click .line-toggle': 'toggleMuting'
  },

  initialize: function() {
    this.listenTo(this.model, 'change:active', this.render);
  },

  playClickedWord: function() {
    if (this.model.get('active')) {
      var target = this.collection.indexOf(this.model);
      if (this.collection.cursor !== target) {
        this.collection.jumpToWord(target);
      }
      this.collection.playAfterDelay();
    }
  },

  toggleMuting: function() {
    var status = this.model.get('active');
    var target = this.collection.indexOf(this.model);
    this.model.set('active', !status);
    if (Storage !== undefined) {
      localStorage.setItem('DE_' + this.model.get('f'), !status);
    }
  },

  render: function() {
    var isActive = this.model.get('active');
    var icon = isActive ? 'fa-bell' : 'fa-bell-slash',
        status = isActive ? '' : 'skipped',
        word = (this.model.get('a') + ' ' + this.model.get('de')).trim();
    var $toggle = $('<div class="line-toggle"></div>')
      .append($('<i class="fa fa-1x"></i>').addClass(icon));
    var $label = $('<div class="line-text"></div>')
      .addClass(status).text(word);
    this.$el.empty().append($toggle, $label);
    return this.$el;
  }

});
