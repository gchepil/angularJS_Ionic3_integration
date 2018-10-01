// import angular from 'angular';

import template from './home.html';

class HomeCtrl {
  constructor($log) {
    // $log.info('HomeCtrl instantiated');
    this.title = 'Home Works! hello from shared folder without';
  }
}

HomeCtrl.$inject = ['$log'];

let home = {
    template: template,
    controller: HomeCtrl
};

const MODULE_NAME = 'home';

// angular.module(MODULE_NAME, [])
//   .config(function() {
//     // For initial application load from base url
//     // defines routing for this component
//       template: '<home></home>'
//   })
//   .component('home', home);

export default MODULE_NAME;