// this file needs to be renamed as anotherComponent
// and change imports in app.module.ts
import { Component } from '@angular/core';

@Component({
  selector: 'another-component',
  template: '<div>{{word}}</div>'
})

class AnotherController {
  public word: string;
  
  constructor() {
    this.word = 'Hello from another controller';
  }
}

export class AnotherComponent extends AnotherController {

}