define(['controllers/Controllers', 'utils/routes', 'jquery',  'jquery-ui'], function(Controllers, routes) {

  var TugBoatApp = (function() {
    var $appEl = $('#tugboat');

    function renderPage(hashName) {
      var ctrl = Controllers.ListPeople;
      switch(hashName) {
        case '#add-person' :
          ctrl = Controllers.AddPerson;
          break;
        case '#delete-person' :
          ctrl = Controllers.DeletePerson;
          break;
        case '#update-person' :
          ctrl = Controllers.UpdatePerson;
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
