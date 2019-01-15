import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MybuttonComponent } from './mybutton/mybutton.component';
import { MybuttonComponent as MybuttonHappy } from './mybutton-happy.component';
import { MybuttonComponent as MybuttonSad } from './mybutton-sad.component';
import { MybuttonComponent as MybuttonConfused } from './mybutton-confused.component';

@NgModule({
  declarations: [
    AppComponent,
    MybuttonComponent,
    MybuttonHappy,
    MybuttonSad,
    MybuttonConfused,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
