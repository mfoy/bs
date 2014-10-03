/*global define*/
define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var Iframe = Backbone.Model.extend({

    defaults: {
      src: 'http://www.google.com'
    }

  });

  return Iframe;
});