define(['controllers/ListPeople',
        'controllers/AddPerson'],
  function(ListPeople, AddPerson) {
    var Controllers = (function() {
      return {
        'ListPeople' : ListPeople,
        'AddPerson'  : AddPerson
      }
    }());
  return Controllers;
});
