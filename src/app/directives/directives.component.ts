import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  swithLabel:string="OFF"
  switchstate:boolean;

  constructor() { }

  ngOnInit() {
  }

onSwithpressed(){
  this.switchstate=!this.switchstate;

  if (this.switchstate==true) 
    this.swithLabel="ON";
  else
    this.swithLabel="OFF";

}
}

