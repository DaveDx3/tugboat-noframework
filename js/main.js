require.config({
  waitSeconds: 0,
  baseUrl: "/js/tugboat",
  "paths": {
    "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
    "jquery-ui": "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min",
    "handlebars": "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars"
  },
  "shim": {
    "jquery": {
      exports: "$"
    },
    'jquery-ui': {
      deps: ['jquery']
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});

require(['TugBoatApp', 'utils/Extensions'],
  function () {

  }
);
