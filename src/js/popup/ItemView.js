import Marionette from 'backbone.marionette';

import template from './item.hbs';

export default Marionette.View.extend({
  template: template,
  initialize: function () {
    var t;
    chrome.tabs.query({}, function (tabs) {
        console.log(tabs);
    });

    chrome.tabs.query({}, function(tabs) {
      console.log('\n/////////////////////\n');
      tabs.forEach(function(tab) {
        // console.log(tab.url);
      });
    });


        // chrome.tabs.query(null, (tabs) => {
        //     t = tabs;
        //     console.log('init', tabs);
        // });
  }
});
