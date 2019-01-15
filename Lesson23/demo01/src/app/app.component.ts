import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="theme-light">
  <h1>Tour of Heroes</h1>
  <app-hero-details class="active"></app-hero-details>
  </div>
`,
  styleUrls:["./test.less"]
})
export class AppComponent {
  title = 'demo01';
}
