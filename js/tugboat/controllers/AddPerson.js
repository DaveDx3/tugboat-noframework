define(['utils/EventHandler', 'handlebars', 'jquery',  'jquery-ui'], function(EventHandler, Handlebars) {
  var AddPerson = (function() {
    var $el = $('<div />');

    function getTemplate( name,data){
      var d=$.Deferred();
      $.get(name+'.hbs',function(response){
        var template = Handlebars.compile(response);
        d.resolve(template(data))
      });
      return d.promise();
    }

    var postData={people : [{fname : 'Dave', sname : 'Dawson', address : {add1: 'Address 1'}}, {fname : 'Mash', sname : 'Dawson'}, {fname : 'Oliver', sname : 'Dawson'}]};
    getTemplate('/js/tugboat/controllers/templates/AddPerson',postData).done(function(content){
      $el.append(content);
    });
    return $el;
  }());

  return AddPerson;
});
