import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  swithLabel:string="OFF"
  switchstate:boolean;
  fruit:string;
  testservice = new TestService;
  
  Fruits:string[]=[];

  constructor() { }

  ngOnInit() {
  }

AddFruittoarray(){
this.Fruits.push(this.fruit);
this.testservice.getTestString(this.fruit);
}
onSwithpressed(){
  this.switchstate=!this.switchstate;

  if (this.switchstate==true) 
    this.swithLabel="ON";
  else
    this.swithLabel="OFF";
}
}

