define(['utils/getTemplate', 'utils/Model'], function(getTemplate, Model) {

  var params = {
    api : 'http://tugboat-api01.dmm.io:8080/person/',
    template : '/js/tugboat/controllers/templates/ListPeople.html'
  };

  var ListPeople = (function() {
    var $el = $('<div />'),
      model = new Model(params.api);

    function init() {
      // setup page functionality here
    }

    return function() {
      model.get().done(function(data) {
        getTemplate(params.template, {'people' : data})
          .done(function(content){
            $el.empty().append(content);
            init();
          });
      });
      return $el;
    }
  }());

  return ListPeople;
});
