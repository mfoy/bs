define([
  'jquery',
  'underscore',
  'backbone',
  'models/iframe',
  'views/iframe',
  'text!templates/configuration.html'
], function ($, _, Backbone, Iframe, IframeView, ConfigurationTemplate) {
  'use strict';

  var ConfigurationView = Backbone.View.extend({

    tagName: 'div',

    template: _.template(ConfigurationTemplate),

    events: {
      'click .editable': 'editField',
      'click .remove': 'removeRow',
      'click .url': 'loadUrl'
    },

    initialize: function(args){
      _.extend(this, args);
      this.listenTo(this.model, 'change', this.render);
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    editField: function(e){
      e.preventDefault();
      $(e.target).editable('show');
      // TODO - update model on close
    },

    removeRow: function(e){
      e.preventDefault();
      $(e.target).parents('tr').fadeOut();
      // TODO - update model
    },

    loadUrl: function(e){
      e.preventDefault();
      console.log('data-url', $(e.target).attr('data-url'));
      this.iframe.set({src: $(e.target).attr('data-url')});
      // $('#iframe').attr('src', $(e.target).attr('data-url'));
    }

  });

  return ConfigurationView;
});