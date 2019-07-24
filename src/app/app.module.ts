import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SecondComponent } from './second/second.component';
import { ThridComponent } from './thrid/thrid.component';
import { FourComponent } from './four/four.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SecondComponent,
    ThridComponent,
    FourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
