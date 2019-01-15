import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unknown';
  hero = {
    name : "abc",
    hoppy:{
      book:"西游记"
    }
  }

  ngOnInit() { 
  
  }
  
  onSubmit(heroForm){
    console.log("heroForm->",heroForm)
  }
  
}
