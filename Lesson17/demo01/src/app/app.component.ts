import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  size=20;

  btnColor="blue";
  btnFontSize="22";
  isSpecial=true;
  title = "我的按钮";
  clickMyButton(){
    alert('abc');
  }

  handleHeroDetail(hero){
    console.log("handleHeroDetail(hero)->",hero)
  }
  sizeChange(event){
    console.log("sizeChange->event",event)
  }
 
  
}
