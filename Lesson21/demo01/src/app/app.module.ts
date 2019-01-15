import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OnChangeComponent } from './on-change/on-change.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { AfterViewComponent } from './after-view/after-view.component';
import { AfterContentComponent } from './after-content/after-content.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangeComponent,
    ChildViewComponent,
    AfterViewComponent,
    AfterContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
