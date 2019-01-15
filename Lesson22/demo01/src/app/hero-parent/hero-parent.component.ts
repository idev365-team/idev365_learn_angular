import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{ master }}</h2>
    <app-hero-child *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master"
    ></app-hero-child>
  `,
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent {
  heroes = [
    {id:1,name:"张三"},
    {id:2,name:"李四"},
    {id:3,name:"王五"},
    {id:4,name:"赵六"},
    {id:5,name:"孙七"},
  ];
  master = 'Master';
}
