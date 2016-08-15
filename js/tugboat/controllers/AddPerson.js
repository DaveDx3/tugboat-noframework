define(['utils/getTemplate'], function(getTemplate) {

  var params = {
    template : '/js/tugboat/controllers/templates/AddPerson.hbs'
  };

  var AddPerson = (function() {
    var $container = $('<div />');

    function init() {
      // setup page functionality here
    }

    return function() {
      getTemplate(params.template)
        .done(function(content){
          $container.empty().append(content);
          init();
        });
      return $container;
    }
  }());

  return AddPerson;
});
