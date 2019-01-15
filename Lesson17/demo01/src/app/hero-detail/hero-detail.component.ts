import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  public hero:Hero = new Hero(5,"张三")
  @Output() deleteRequest = new EventEmitter<Hero>();
  constructor() { }

  ngOnInit() {
    console.log("this.hero->",this.hero)
  }

  delete(){
    console.log("delete() called")
    this.deleteRequest.emit(this.hero)
  }

}
