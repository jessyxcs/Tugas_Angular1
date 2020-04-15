import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  num1 = '';
  num2 = '';
  SubmitBtn(){
    num1 = this.a;

  }
}
