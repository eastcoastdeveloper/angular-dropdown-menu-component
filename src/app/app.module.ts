import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClickDirective } from './directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ClickDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
