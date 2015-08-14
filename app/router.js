import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('flattened');
  this.route('bubble');
  this.route('bound');
});

export default Router;
