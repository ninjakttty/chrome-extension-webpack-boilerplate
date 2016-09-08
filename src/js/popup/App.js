import Marionette from 'backbone.marionette';

import ItemView from './ItemView';

export default Marionette.Application.extend({
  region: '#app',

  initialize() {
    this.on('start', () => {
      console.log('hi there.!...');
      // chrome.tabs.query(null, (tabs) => {
      //   console.log(tabs);
      // })
      this.showView(new ItemView());
    })
  }
});
