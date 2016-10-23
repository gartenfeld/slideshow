(function() {

  var DATA_PATH = 'data/';
  var FILE_SUFFIX = '.js';
  var TIMEOUT = 10000;
  var PAGE_SIZE = 200;

  var Store = {};

  Store.entries = {};

  Store.add = function(entries, section) {
    entries.forEach(function(entry, i) {
      Store.entries[section + i] = entry;
    });
  };

  Store.load = function(file) {
    var deferred = $.Deferred();
    var timer = setTimeout(function() {
      if (deferred.state() !== 'resolved') {
        deferred.reject("Timeout!");
      }
      clearTimeout(timer);
    }, TIMEOUT);
    var onLoad = function() {
      deferred.resolve();
      clearTimeout(timer);
    };
    var loader = document.createElement('script');
    loader.type = 'text/javascript';
    loader.onload = onLoad;
    loader.src = DATA_PATH + file + FILE_SUFFIX;
    document.body.appendChild(loader);
    return deferred.promise();
  };

  Store.whereIs = function(offset) {
    return offset - offset % PAGE_SIZE;
  };

  Store.get = function(offset) {
    var first = offset % 3990;
    var last = first + 9;
    var pages = [first, last].filter(function(i) {
      return !Store.entries[i];
    }).map(Store.whereIs).reduce(function(uniq, item) {
      return uniq.indexOf(item) === -1 ? uniq.concat(item) : uniq;
    }, []);
    var deferred = $.Deferred();
    $.when.apply($.when, pages.map(Store.load)).done(function() {
      var data = Array(10).fill().map(function(foo, i) {
        return Store.entries[first + i];
      });
      deferred.resolve({ words: data });
    }).fail(function() {
      deferred.reject();
    });
    return deferred.promise();
  };

  window.loadEntries = Store.add;
  window.dataStore = Store;

})();
