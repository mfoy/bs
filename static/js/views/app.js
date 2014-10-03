define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'editable',
  'text!templates/app.html',
  'collections/configuration-selection',
  'views/configuration-selection',
  'models/iframe',
  'views/iframe'
], function ($, _, Backbone, Bootstrap, Editable, AppTemplate, ConfigurationSelectionCollection, ConfigurationSelectionView, Iframe, IframeView) {
  'use strict';

  var AppView = Backbone.View.extend({

    el: '#app',

    template: _.template(AppTemplate),

    configurationSelectionCollection: ConfigurationSelectionCollection,

    //iframe: Iframe,

    initialize: function () {
      this.listenTo(this.configurationSelectionCollection, 'sync', this.syncConfigurationSelections);
      this.configurationSelectionCollection.fetch();
      this.render();
      //$("#iframe").attr('width', $("#iframe").parent().width());

      //this.iframe = new Iframe({src: ''});
      //console.log(this.iframe);
      //var view = new IframeView({model:this.iframe});
      //this.$('#iframe-panel').append(view.render().el);
    },

    render: function () {
      this.$el.html(this.template({}));
    },

    addConfigurationSelection: function(configurationSelection){
      //console.log(this.iframe);
      var view = new ConfigurationSelectionView({
        model: configurationSelection
        //iframe: this.iframe
      });
      this.$('#spider-configurations-dropdown').append(view.render().el);
    },

    syncConfigurationSelections: function(){
      this.configurationSelectionCollection.each(this.addConfigurationSelection, this);
    }

  });

  return AppView;
});