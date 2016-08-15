define(['handlebars', 'jquery',  'jquery-ui'], function(Handlebars) {
  var Model = function(path) {
    this.path = path;
  };

  Model.prototype = {
    getData : function() {
      var _this = this,
        d = $.Deferred();
      $.get(_this.path).then(function(data) {
        d.resolve(data);
      });
      return d.promise();
    }
  }
  return Model;
});
