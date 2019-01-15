import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view',
  template: '<input [(ngModel)]="hero">',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent {
  hero = 'Magneta';
}
