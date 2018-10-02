import angular from 'angular';
import heros from '@globalShared/controller';
import AnotherController from './anotherController';

import './style/app.css';

const MODULE_NAME = 'app';

class AppCtrl {
  public url: string;
  public heros: Array<any>;

  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.heros = heros.getArray();
  }
}

class AppComponent {
  public templateUrl: string;
  public controller: any;
  public controllerAs: string;

  constructor() {
    this.templateUrl = './app.html';
    this.controller = AppCtrl;
    this.controllerAs = "app";
  }
};

angular
.module(MODULE_NAME, [])
.component("appDirective", new AppComponent())
.controller("AnotherCtrl", AnotherController);

angular.element(document).ready(function() {
  angular.bootstrap(document, [MODULE_NAME]);
});
