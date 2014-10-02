define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'editable',
  'text!templates/app.html',
  'collections/configuration-selection',
  'views/configuration-selection'
], function ($, _, Backbone, Bootstrap, Editable, AppTemplate, ConfigurationSelectionCollection, ConfigurationSelectionView) {
  'use strict';

  var AppView = Backbone.View.extend({

    el: '#app',

    template: _.template(AppTemplate),

    configurationSelectionCollection: ConfigurationSelectionCollection,

    initialize: function () {
      this.listenTo(this.configurationSelectionCollection, 'sync', this.syncConfigurationSelections);
      this.configurationSelectionCollection.fetch();
      this.render();
    },

    render: function () {
      this.$el.html(this.template({}));
    },

    addConfigurationSelection: function(configurationSelection){
      var view = new ConfigurationSelectionView({model:configurationSelection});
      this.$('#spider-configurations-dropdown').append(view.render().el);
    },

    syncConfigurationSelections: function(){
      this.configurationSelectionCollection.each(this.addConfigurationSelection, this);
    }

  });

  return AppView;
});