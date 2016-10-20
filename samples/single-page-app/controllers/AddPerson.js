define(['utils/getTemplate', 'utils/Model'], function(getTemplate, Model) {
  var params = {
    api : 'http://tugboat-api01.dmm.io:8080/person/save',
    template : '/js/tugboat/controllers/templates/PersonForm.html'
  };

  var AddPerson = (function() {
    var $container = $('<div />');

    return function() {
      getTemplate(params.template)
        .done(function(content){
          $container.empty().append(content);
        });
      return $container;
    }
  }());

  return AddPerson;
});
