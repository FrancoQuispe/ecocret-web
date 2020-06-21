import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './pagina/banner/banner.component';
import { BodyComponent } from './pagina/body/body.component';
import { FooterComponent } from './pagina/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
