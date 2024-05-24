import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-product-36047-car-l');
  this.route('i-i-s-product-36047-car-e',
  { path: 'i-i-s-product-36047-car-e/:id' });
  this.route('i-i-s-product-36047-car-e.new',
  { path: 'i-i-s-product-36047-car-e/new' });
});

export default Router;
