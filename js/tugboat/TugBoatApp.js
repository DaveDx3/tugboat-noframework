define(['controllers/Controllers', 'routes/Routes', 'jquery',  'jquery-ui'], function(Controllers, Routes) {

  var TugBoatApp = (function() {
    var $appEl = $('#tugboat');

    function renderPage(hashName) {
      switch(hashName) {
        case '#add-person' :
          $appEl.empty().append(Controllers.AddPerson);
          break;
        default  :
          $appEl.empty().append('HOME PAGE');
      }
    }
    Routes.evts.addListener('URL_CHANGE', renderPage);
    (function init() {
      renderPage(Routes.current);
    }());
  }());
});
