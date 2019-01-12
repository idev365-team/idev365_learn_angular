import { Component, OnInit } from '@angular/core';
import { RenderNodeAction } from '@angular/core/src/view/util';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero:Hero = {
    id:1,
    name:"Windstorm"
  }

  heroes = HEROES;

  selectedHero:Hero;
  onSelect(hero:Hero):void{
    console.log("onSelect",hero)
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
