$(function(){

  // When the document is ready
  soundManager.setup({
    url: 'swf/',
    flashVersion: 9,
    preferFlash: false,
    onready: function(){
      var app = new AppView({
        collection: new Wordlist()
      });
    }
  });

});

  // var Player = {
  //   settings: {
  //     repeats: 3,
  //     interval: 500
  //   },
  //   play: function(){},
  //   previous: function(){},
  //   next: function(){}
  // };