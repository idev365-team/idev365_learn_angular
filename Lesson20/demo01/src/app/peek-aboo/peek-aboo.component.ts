import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-peek-aboo',
  templateUrl: './peek-aboo.component.html',
  styleUrls: ['./peek-aboo.component.css']
})
export class PeekABooComponent implements OnInit {
  @Input() title
  constructor() { 
    console.log("PeekABooComponent->constructor")

  }

  ngOnChanges(a,b){
    console.log("PeekABooComponent->ngOnChanges",a,b)
  }

  ngOnInit() {
    console.log("PeekABooComponent->ngOnInit")
  }

  ngDoCheck(){
    console.log("PeekABooComponent->ngDoCheck")
  }

  ngAfterContentInit(){
    console.log("PeekABooComponent->ngAfterContentInit")
  }

  ngAfterContentChecked(){
    console.log("PeekABooComponent->ngAfterContentChecked")
  }

  ngAfterViewInit(){
    console.log("PeekABooComponent->ngAfterViewInit")
  }

  ngOnDestroy(){
    console.log("PeekABooComponent->ngOnDestroy")
  }

}
