import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroImageUrl="https://www.baidu.com/img/bd_logo1.png?qua=high&where=super";

  classes=["title","abc"].join(" ")
}
