require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: [
        'jquery'
      ]
    },
    editable: {
      deps: [
        'jquery',
        'bootstrap'
      ]
    }
  },
  paths: {
    editable: 'libs/editable/editable.min',
    jquery: 'libs/jquery/jquery.min',
    underscore: 'libs/underscore/underscore.min',
    backbone: 'libs/backbone/backbone.min',
    bootstrap: 'libs/bootstrap/bootstrap.min',
    router: 'routers/router',
    text: 'libs/requirejs-text/text'
  }
});

require([
  'backbone',
  'views/app',
  'router'
], function(Backbone, AppView, Workspace){
  new Workspace();
  Backbone.history.start();
  new AppView();
});