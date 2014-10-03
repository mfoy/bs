define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/configuration-selection.html',
  'views/configuration',
  'models/iframe',
  'views/iframe'
], function ($, _, Backbone, ConfigurationSelectionTemplate, ConfigurationView, Iframe, IframeView) {
  'use strict';

  var ConfigurationSelectionView = Backbone.View.extend({

    tagName: 'li',

    template: _.template(ConfigurationSelectionTemplate),

    events: {
      "click": "loadConfiguration"
    },

    initialize: function(args){
      this.iframe = new Iframe({src: this.model.get('institution_url')});
      this.listenTo(this.model, 'change', this.render);
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    loadConfiguration: function(e){
      e.preventDefault();
      console.log(this.model, this.iframe);
      var view = new ConfigurationView({
        model: this.model,
        iframe: this.iframe
      });
      $('#spider-configuration').html(view.render().el);
      $('.editable').editable({
        toggle: 'manual',
        placement: 'right',
        showbuttons: false
      });

      view = new IframeView({model: this.iframe});
      $('#iframe-panel').append(view.render().el);
      view.resize();
    }

  });

  return ConfigurationSelectionView;
});