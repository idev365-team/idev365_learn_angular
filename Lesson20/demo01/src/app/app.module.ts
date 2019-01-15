import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeekABooComponent } from './peek-aboo/peek-aboo.component';
import { SpyDirective } from './spy.directive';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooComponent,
    SpyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
