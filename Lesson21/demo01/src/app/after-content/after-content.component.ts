import { Component, OnInit,ContentChild } from '@angular/core';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'app-after-content',
  template: `
  <div>-- projected content begins --</div>
    <ng-content></ng-content>
    <h1>comment:{{ comment }}</h1>
  <div>-- projected content ends --</div>`,
})
export class AfterContentComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  


  private prevHero = ""
  comment = null;
  @ContentChild(ChildViewComponent) viewChild:ChildViewComponent;

  ngAfterContentInit(){
    this.logIt('ngAfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked(){
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('ngAfterContentChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('ngAfterContentChecked');
      this.doSomething();
    }
  }

  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      // this.logger.tick_then(() => this.comment = c);
      
      this.comment = c;
      // setTimeout(()=>{
        
      // },0)
    }
  }

  logIt(msg){
    console.log("#AfterViewComponent#",msg)
  }

}
