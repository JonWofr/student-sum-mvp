import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Views

import { HomeComponent } from './views/home/home.component';
import { SearchResultsComponent } from './views/search-results/search-results.component';

// Components

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VideoContainerComponent } from './components/video-container/video-container.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './views/contact/contact.component';
import { CompanyInformationComponent } from './views/company-information/company-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VideoContainerComponent,
    BannerComponent,
    HomeComponent,
    SearchResultsComponent,
    ContactComponent,
    CompanyInformationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
