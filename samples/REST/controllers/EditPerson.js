define(['utils/Model', 'utils/routes'], function(Model, routes) {


  var EditPerson = (function() {

    var params = {
      api : 'http://tugboat-api01.dmm.io:8080/person/show/[id]',
    };

    model = new Model(params.api.replace('[id]', routes.getParam(url, 'id')));

    model.get().done(function(data) {
      //success callback
    });

  }());

  return EditPerson;
});
