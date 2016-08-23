define(['utils/getTemplate', 'utils/Model'], function(getTemplate, Model) {
  var params = {
    api : 'http://tugboat-api01.dmm.io:8080/person/save',
    template : '/js/tugboat/controllers/templates/PersonForm.html'
  };

  var AddPerson = (function() {
    var $container = $('<div />'),
      model = new Model(params.api);

    function init(content) {
      $('#personForm').on('submit', function() {
        model.post($(this).serializeObject()).done(function() {
          window.location.hash = '/people-list';
        });
      });
    }

    return function() {
      getTemplate(params.template)
        .done(function(content){
          $container.empty().append(content);
          init(content);
        });
      return $container;
    }
  }());

  return AddPerson;
});
