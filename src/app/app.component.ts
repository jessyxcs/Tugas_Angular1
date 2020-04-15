import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  num1 = 0;
  num2 = 0;
  hasil = 0;

  SubmitBtn(){ 
    this.hasil = Math.pow(this.num1, this.num2);
  }

  ClearBtn(){
    this.num1=0;
    this.num2=0;
    this.hasil=0;
  }

  
}
