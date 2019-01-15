import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MybuttonComponent } from './mybutton/mybutton.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SizerComponent } from './sizer.component';
@NgModule({
  declarations: [
    AppComponent,
    MybuttonComponent,
    HeroDetailComponent,
    SizerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
