import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpcionComponent } from './opcion/opcion.component';
import { PanelComponent } from './panel/panel.component';
import { PanelJavaScriptComponent } from './panel-JavaScript/panel-JavaScript.component';
import { PanelCSSComponent } from './panel-CSS/panel-CSS.component';
import { PanelHTMLComponent } from './panel-HTML/panel-HTML.component';
import { CloseComponent } from './close/close.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OpcionComponent,
    PanelComponent,
    PanelJavaScriptComponent,
    PanelCSSComponent,
    PanelHTMLComponent,
    CloseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
