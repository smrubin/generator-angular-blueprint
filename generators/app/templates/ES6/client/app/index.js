'use strict';

import config from './config/';
import services from './services/';
import components from './components/';
import views from './views/';

var moduleName = 'MyApp';

var app = angular.module(moduleName, [
  services,
  components,
  views,
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ui.router',
  'ngSanitize',
  'ngTouch'
]);

app.config(config);

export default moduleName;