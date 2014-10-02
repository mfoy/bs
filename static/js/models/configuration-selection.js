/*global define*/
define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var ConfigurationSelection = Backbone.Model.extend({

    url: 'api/v1/spiders',

    defaults: {
      name: null,
      production_ready: null
    }

  });

  return ConfigurationSelection;
});