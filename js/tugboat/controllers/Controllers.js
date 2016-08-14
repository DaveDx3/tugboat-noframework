define(['controllers/AddPerson',
        'utils/EventHandler',
        'jquery',
        'jquery-ui'],
  function(AddPerson, EventHandler) {
    var Controllers = (function() {
      return {
        'AddPerson' : AddPerson
      }
    }());
  return Controllers;
});
