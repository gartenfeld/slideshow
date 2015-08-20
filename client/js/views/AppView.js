var AppView = Backbone.View.extend({

  el: '#screen',

  initialize: function () {
    this.stage = new StageView({
      collection: this.collection
    });
    this.controls = new ControlsView({
      collection: this.collection
    });
  }

});
