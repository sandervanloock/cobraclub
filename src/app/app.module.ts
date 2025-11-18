import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing/app-routing.module';

import {AppComponent} from './app.component';
import {HomepageImageComponent} from './homepage-image/homepage-image.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ClubpageComponent} from './clubpage/clubpage.component';
import {StatutenpageComponent} from './statutenpage/statutenpage.component';
import {LedenpageComponent} from './ledenpage/ledenpage.component';
import {ImageLightboxComponent} from './image-lightbox/image-lightbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageImageComponent,
    HomepageComponent,
    ClubpageComponent,
    StatutenpageComponent,
    LedenpageComponent,
    ImageLightboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
