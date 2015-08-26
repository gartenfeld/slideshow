var AppView = Backbone.View.extend({

  el: '#screen',

  initialize: function () {
    new StageView({
      collection: this.collection
    });
    new ControlsView({
      collection: this.collection
    });
    new ListView({
      collection: this.collection
    });
  }

});
