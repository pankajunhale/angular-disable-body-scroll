import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerCustomConfiguration } from './hammer.config';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerCustomConfiguration
    }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor(){
    console.log(HammerCustomConfiguration);
  }
}
