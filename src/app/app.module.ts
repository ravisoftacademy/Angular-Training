import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, StringInterpolationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
