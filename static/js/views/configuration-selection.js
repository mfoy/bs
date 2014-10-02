define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/configuration-selection.html',
  'views/configuration'
], function ($, _, Backbone, ConfigurationSelectionTemplate, ConfigurationView) {
  'use strict';

  var ConfigurationSelectionView = Backbone.View.extend({

    tagName: 'li',

    template: _.template(ConfigurationSelectionTemplate),

    events: {
      "click": "loadConfiguration"
    },

    initialize: function(){
      this.listenTo(this.model, 'change', this.render);
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    loadConfiguration: function(e){
      e.preventDefault();
      var view = new ConfigurationView({model:this.model});
      $('#spider-configuration').html(view.render().el);
      $('.editable').editable({
        toggle: 'manual',
        placement: 'right',
        showbuttons: false
      });
    }

  });

  return ConfigurationSelectionView;
});