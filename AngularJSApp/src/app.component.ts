import { Component } from '@angular/core';
import heros from '@globalShared/controller';
import hero from '@globalShared/interfaces/hero';
import './style/app.css';

@Component({
  selector: 'app-directive',
  templateUrl: './app.html'
})

class AppCtrl {
  public url: string;
  public heros: hero[];

  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.heros = heros.getArray();
  }
}

export class AppComponent extends AppCtrl {

}
