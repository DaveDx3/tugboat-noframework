define(['utils/EventHandler', 'jquery',  'jquery-ui'], function(EventHandler) {
  var Form = (function() {
    function validate() {

    }
    function submit() {

    }

    return function(params) {
      this.$form = $(params.formSel);
      this.evts = new EventHandler();

      this.$form.on('submit', function(e) {
        e.preventDefault();
        console.log('submitted');
      });
    }
  }());

  return Form;
});
