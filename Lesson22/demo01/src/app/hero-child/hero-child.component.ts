import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{ hero.name}}</h3>
    <p>I,{{hero.name}},am at your service,{{masterName}}</p>
  `,
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent {
  @Input() hero;
  @Input('master') masterName:string;
}
