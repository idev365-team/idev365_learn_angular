import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-mybutton',
  templateUrl: './mybutton.component.html',
  styleUrls: ['./mybutton.component.css']
})
export class MybuttonComponent implements OnInit {
  @Input() title;
  constructor() {
    console.log("MybuttonComponent->constructor")
   }

  ngOnInit() {
    console.log("MybuttonComponent->ngOnInit")
  }

}
