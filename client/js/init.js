// setup should be called before DOM-ready
// http://www.schillmania.com/projects/soundmanager2/doc/#sm-config

soundManager.setup({
  url: 'swf/',
  flashVersion: 9,
  preferFlash: false,
  onready: function() {
    $(function(){
      new AppView({ collection: new Wordlist() });
    });
  }
});