import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VoteTakerComponent } from './votetaker.component';
import { VoterComponent } from './voter.component';
import { CountdownViewChildParentComponent } from './countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { MissionService } from './mission.service';
import { AstronautComponent } from './astronaut.component';
import { MissionControlComponent } from './missioncontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoteTakerComponent,
    VoterComponent,
    CountdownViewChildParentComponent,
    CountdownTimerComponent,
    AstronautComponent,
    MissionControlComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MissionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
