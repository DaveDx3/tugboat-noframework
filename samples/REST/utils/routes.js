define(['utils/EventHandler', 'jquery',  'jquery-ui'], function(EventHandler) {

  var Routes = (function() {
    var evts = new EventHandler();
    $(window).on('hashchange', function() {
      evts.dispatchEvent('URL_CHANGE', [decodeURI(window.location.hash)]);
    });
    return {
      evts : evts,
      getRoute : function (hashName, routeMap) {
        for(var i in routeMap) {
          if(new RegExp('^'+routeMap[i].url.replace(/{.*}/, '(.*)')+'$').test(hashName)) {
            return routeMap[i];
          }
        }
      },
      getParam : function(url, param) {
        var s = url.split('{'+param+'}'),
          rtn = this.current();
        for (var i in s) {
          rtn = rtn.replace(s[i], '');
        }
        return rtn;
      },
      'current' : function() {
        return decodeURI(window.location.hash);
      }
    };
  }());

  return Routes;
});
