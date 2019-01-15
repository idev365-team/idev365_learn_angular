import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;
  
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location
  ) { }

  ngOnInit() {
    this.getHero()
  }

  getHero():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero=>this.hero = hero )
  }

  goBack(): void {
    this.location.back();
  }

}
