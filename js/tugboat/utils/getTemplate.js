define(['handlebars', 'jquery'], function(Handlebars) {

  function getTemplate(name, data){
    var d = $.Deferred();
    $.get(name, function(response){
      var template = Handlebars.compile(response);
      d.resolve(template(data))
    });
    return d.promise();
  }
  return getTemplate;
});
