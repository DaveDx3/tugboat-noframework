define(['controllers/ListPeople',
        'controllers/AddPerson',
        'controllers/EditPerson'],
  function(ListPeople, AddPerson, EditPerson) {
    var Controllers = (function() {
      return {
        'AddPerson'    : AddPerson,
        'ListPeople'   : ListPeople,
        'UpdatePerson' : EditPerson,
        'DeletePerson' : false
      }
    }());
  return Controllers;
});
