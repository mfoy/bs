/*global define */
define([
  'underscore',
  'backbone',
  'models/configuration-selection'
], function (_, Backbone, ConfigurationSelection) {
  'use strict';

  var ConfigurationSelectionCollection = Backbone.Collection.extend({
    model: ConfigurationSelection,
    url: '/api/v1/spiders'
  });

  return new ConfigurationSelectionCollection;
});