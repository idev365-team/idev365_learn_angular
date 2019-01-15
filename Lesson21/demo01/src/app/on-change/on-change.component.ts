import { Component,Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.css']
})
export class OnChangeComponent {
  @Input() hero;
  @Input() power:string;
  oldHeroName : null;
  

  changeLogs = []

  reset(){
    this.changeLogs = []
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("changes",changes)
    // this.addLog("")

    for(let propName in changes){
      let changeInfo =  changes[propName];
      let cur = JSON.stringify(changeInfo.currentValue);
      let prev = JSON.stringify(changeInfo.previousValue);
      this.addLog(`${propName}:curValue:${cur} :prevValue:${prev}`)

    }

  }

  ngDoCheck(){
    console.log("ngDoCheck-->")
    if(this.hero.name !== this.oldHeroName){
      this.addLog(`hero.name:curValue:${this.hero.name} :prevValue:${ this.oldHeroName }`)
      this.oldHeroName = this.hero.name
    }
  }

  addLog(msg){
    this.changeLogs.push(msg)
  }
}
