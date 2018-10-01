import angular from 'angular';
import heros from '@globalShared/controller.ts';
import AnotherController from './anotherController';

import './style/app.css';

let appDirective = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.heros = heros.getArray();
  }
}

class TestCtrla {
  constructor() {
    this.word = 'privet';
  }
}

AppCtrl.$inject = ['$log'];
const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('appDirective', appDirective)
  .controller('AppCtrl', AppCtrl)
  .controller('AnotherCtrl', AnotherController)
  

export default MODULE_NAME;