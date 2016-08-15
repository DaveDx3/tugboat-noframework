define(['controllers/ListPeople',
        'controllers/AddPerson'],
  function(ListPeople, AddPerson) {
    var Controllers = (function() {
      return {
        'AddPerson'    : AddPerson,
        'ListPeople'   : ListPeople,
        'UpdatePerson' : false,
        'DeletePerson' : false
      }
    }());
  return Controllers;
});
