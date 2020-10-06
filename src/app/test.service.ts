import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

test:string;
  constructor() { }

getTestString(x:string){
  this.test=x;
  console.log(this.test);
}
}