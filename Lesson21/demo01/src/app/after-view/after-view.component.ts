import { Component, OnInit,AfterViewChecked,AfterViewInit,ViewChild } from '@angular/core';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'app-after-view',
  template: `
  <div>-- child view begins --</div>
    <app-child-view></app-child-view>
    <h1>comment:{{ comment }}</h1>
  <div>-- child view ends --</div>`,
  styleUrls: ['./after-view.component.css']
})
export class AfterViewComponent implements AfterViewChecked,AfterViewInit {
  constructor(){

  }
  private prevHero = ""
  comment = null;
  @ViewChild(ChildViewComponent) viewChild:ChildViewComponent;

  ngAfterViewInit(){
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked(){
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      // this.logger.tick_then(() => this.comment = c);
      
      setTimeout(()=>{
        this.comment = c;
      },0)
    }
  }

  logIt(msg){
    console.log("#AfterViewComponent#",msg)
  }

}
