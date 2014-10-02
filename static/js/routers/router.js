/*global define*/
define([
  'jquery',
  'backbone'
], function ($, Backbone, Fixtures) {
  'use strict';

  var AcsRouter = Backbone.Router.extend({
    routes: {
      '*filter': 'setFilter'
    },

    setFilter: function (param) {
      console.log('setFilter - ' + param);
      // Set the current filter to be used
      //Common.TodoFilter = param || '';

      // Trigger a collection filter event, causing hiding/unhiding
      // of the Todo view items
      // Fixtures.trigger('filter');
    }
  });

  return AcsRouter;
});