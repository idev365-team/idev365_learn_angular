import { Directive } from '@angular/core';

@Directive({
  selector: '[appSpy]'
})
export class SpyDirective {

  constructor() { }

  ngOnInit()    { this.logIt(`onInit`); }

  ngOnDestroy() { this.logIt(`onDestroy`); }

  private logIt(msg: string) {
    console.log(`Spy # ${msg}`);
  }
}
