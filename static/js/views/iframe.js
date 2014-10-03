define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/iframe.html'
], function ($, _, Backbone, IframeTemplate) {
  'use strict';

  var IframeView = Backbone.View.extend({

    tagName: 'div',

    template: _.template(IframeTemplate),

    events: {
      'click #evaluate-xpath': 'evaluateXPath'
    },

    initialize: function(){
      console.log(this.model, this.render);
      this.listenTo(this.model, 'change', this.render);
    },

    render: function(){
      console.log('render iframe view', this.model);
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    resize: function(){
      $("#iframe").attr('width', $("#iframe").parent().width());
    },

    evaluateXPath: function(e){
      e.preventDefault();
      console.log($('#xpath-expression').val());
      this.xpath($('#xpath-expression').val());
    },

    xpath: function(xpath_expression){
      var iframe_document = $('#iframe').contents()[0];
      var evaluate_result = iframe_document.evaluate(xpath_expression, iframe_document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

      var xpath_result = evaluate_result.iterateNext(); //.singleNodeValue;
      while(xpath_result){
        xpath_result.style.opacity = 0.2;
        xpath_result.style.content = 'FOOOOO';
        xpath_result = evaluate_result.iterateNext();
      }
      var result = null;
      if(xpath_result){
        console.log(xpath_result);
        // get text if it was a text node
        result = xpath_result.hasOwnProperty('wholeText') ? xpath_result.wholeText : result;
        // get value if it has a value
        result = xpath_result.hasOwnProperty('value') ? xpath_result.value : result;
        // else it's a node
        if(result === null){
          result = xpath_result;
        }
      }
      if(typeof result == 'string'){
        result = $.trim(result);
      }
      console.log('xpath_expression: ' + xpath_expression + ' --> ' + result);
      return result;
    }

  });

  return IframeView;
});