import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('peliculas', function() {
    this.route('listado', function() {
      this.route('detalle');
    });
    this.route('alta');
  });
});

export default Router;
