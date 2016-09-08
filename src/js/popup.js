import '../css/popup.css';

import _ from  'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import App from './popup/App';
Backbone.$ = $;
window.$ = $;



const app = new App();
app.start();

