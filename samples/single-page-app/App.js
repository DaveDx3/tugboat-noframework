define(['controllers/Controllers', 'utils/routes', 'jquery',  'jquery-ui'], function(Controllers, routes) {
  var TugBoatApp = (function() {

    var $appEl = $('#tugboat'),
      routeMap = [
        {url: '#/people',
          ctrl: Controllers.ListPeople},
        {url: '#/add-person',
         ctrl: Controllers.AddPerson},
        {url: '#/people/{id}/edit',
         ctrl: Controllers.UpdatePerson}
      ];

    function renderPage(hashName) {
      var route = routes.getRoute(hashName, routeMap) || {ctrl: Controllers.ListPeople};
      $appEl.empty().append(route.ctrl(route.url));
    }

    routes.evts.addListener('URL_CHANGE', renderPage);

  }());
});
