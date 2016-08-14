define(['utils/getTemplate', 'utils/Model'], function(getTemplate, Model) {
  var ListPeople = (function() {
    var $el = $('<div />'),
      model = new Model('https://jsonplaceholder.typicode.com/users');

    model.getData().then(function(data) {
      getTemplate('/js/tugboat/controllers/templates/ListPeople.hbs', {'people' : data})
        .done(function(content){
          $el.append(content);
        });
    });

    return $el;
  }());

  return ListPeople;
});
