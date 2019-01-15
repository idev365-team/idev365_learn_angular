import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {
  value = ""
  constructor() { }

  ngOnInit() {
  }

  onKey(value:string){
    console.log("onKey->",value)
  }

  onKeyEnter(value:string){
    alert(value)
  }

  update(value:string){
    this.value = value;
  }

}
