import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('thing', function () {
    this.route('show');
    this.route('route-with-action');
  });
  this.route('dynamic');
  this.route('dynamic2');
  this.route('dynamic3');
});
