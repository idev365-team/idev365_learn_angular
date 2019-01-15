import { Component } from '@angular/core';
import { Hero } from './hero';

const msg = "Hello,Angular"

@Component({
  selector: 'app',
  templateUrl:"./abc.html",
})
export class AppComponent {
  title = 'demo01';
  heroes = [
    new Hero(1,'Windstorm'),
    new Hero(2,'Bombasto'),
    new Hero(3, 'Magneta'), 
    new Hero(4,'Tornado'),
  ];
  myHero = this.heroes[0]
}
