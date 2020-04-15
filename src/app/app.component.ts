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
  bilangan = '';
  pola = '';

  tmp = 0;
  count = 0;
  SubmitBtn(){ 
    this.hasil = Math.pow(this.num1, this.num2);
    if(this.hasil % 2 == 0){
      this.bilangan = "Bilangan Genap (Pola B)"
      this.tmp = this.num2;

      //FOR LOOP 
      for(var i=this.num2; i<=this.hasil; i++){
        for(var j=1; j <= i; j++){
          this.pola = this.pola.concat("*");
        }
        this.pola = this.pola.concat("\n");
      }
    }

    else{
      this.bilangan = "Bilangan Ganjil (Pola A)"
      this.tmp = 1;
      this.count = 1;
      //FOR LOOP 
      for(var i=this.num2;i>=1;i--){
        for(var j=0; j<i;j++){
          this.pola = this.pola.concat("*");
        }

        if(this.count <= this.num1){
          for(var k=0; k<this.tmp; k++){
            this.pola = this.pola.concat("o");
          }
          this.tmp++;
          this.count++;
        }
        this.pola = this.pola.concat("\n");
      }
    }

  }

  ClearBtn(){
    this.num1=0;
    this.num2=0;
    this.hasil=0;
    this.bilangan='';
    this.pola = '';
  }

  

}
