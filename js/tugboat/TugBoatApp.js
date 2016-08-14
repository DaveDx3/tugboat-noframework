define(['controllers/Controllers', 'utils/routes', 'jquery',  'jquery-ui'], function(Controllers, routes) {

  var TugBoatApp = (function() {
    var $appEl = $('#tugboat');

    function renderPage(hashName) {
      var ctrl = false;
      switch(hashName) {
        case '#add-person' :
          ctrl = Controllers.AddPerson;
          break;
        default  :
          ctrl = Controllers.ListPeople;
      }

      $appEl.empty().append(ctrl);
    }
    routes.evts.addListener('URL_CHANGE', renderPage);
    (function init() {
      renderPage(routes.current);
    }());
  }());
});
