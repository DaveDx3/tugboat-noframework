define(['jquery',  'jquery-ui'], function() {

  var Model = (function() {

    function call(path, type, data) {
      return $.ajax({
        type: type,
        url: path,
        data: data,
        contentType: "application/json",
        dataType: 'json'
      });
    }

    var Model = function(path) {
      this.path = path;
    };

    Model.prototype = {
      get : function() {
        return call(this.path);
      },
      post : function(data) {
        return call(this.path, 'POST', JSON.stringify(data));
      }
    }

    return Model;
  }());

  return Model;
});
