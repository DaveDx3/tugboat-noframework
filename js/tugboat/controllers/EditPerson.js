define(['utils/getTemplate', 'utils/Model', 'utils/routes', 'utils/form'], function(getTemplate, Model, routes, Form) {

  var params = {
    api : 'http://tugboat-api01.dmm.io:8080/person/show/[id]',
    template : '/js/tugboat/controllers/templates/PersonForm.html'
  };

  var EditPerson = (function() {
    var $el = $('<div />'),
      model = false;

    function init(data) {
      console.log('init');
      var personForm = new Form({
        formSel : 'form#personForm'
      })
    }

    return function(url) {
      model = new Model(params.api.replace('[id]', routes.getParam(url, 'id')));
      model.get().done(function(data) {
        getTemplate(params.template, data)
          .done(function(content){
            $el.empty().append(content);
            init(data);
          });
      });
      return $el;
    }
  }());

  return EditPerson;
});
