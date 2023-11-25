import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MyFirstService } from './services/my-first.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [MyFirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
