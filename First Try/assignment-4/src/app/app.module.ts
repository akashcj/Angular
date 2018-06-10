import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameControllerComponent } from './game-controller/game-controller.component';
import { OddCaptureComponent } from './odd-capture/odd-capture.component';
import { EvenCaptureComponent } from './even-capture/even-capture.component';


@NgModule({
  declarations: [
    AppComponent,
    GameControllerComponent,
    OddCaptureComponent,
    EvenCaptureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
