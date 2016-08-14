define(['utils/EventHandler', 'jquery',  'jquery-ui'], function(EventHandler) {

  var Routes = (function() {
    var evts = new EventHandler();
    $(window).on('hashchange', function() {
      evts.dispatchEvent('URL_CHANGE', [decodeURI(window.location.hash)]);
    });
    return {
      'evts' : evts,
      'current' : decodeURI(window.location.hash)
    };
  }());

  return Routes;
});
