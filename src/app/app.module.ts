import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireAnalyticsModule,
  ScreenTrackingService,
  DEBUG_MODE,
} from '@angular/fire/analytics';

// Views

import { HomeComponent } from './views/home/home.component';
import { SearchResultsComponent } from './views/search-results/search-results.component';

// Components

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './views/contact/contact.component';
import { CompanyInformationComponent } from './views/company-information/company-information.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { CourseModalComponent } from './components/course-modal/course-modal.component';
import { BuyFormComponent } from './views/buy-form/buy-form.component';
import { CreaterCalculatorComponent } from './components/creater-calculator/creater-calculator.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CourseCardComponent,
    BannerComponent,
    HomeComponent,
    SearchResultsComponent,
    ContactComponent,
    CompanyInformationComponent,
    AdvantageComponent,
    SearchfieldComponent,
    CourseModalComponent,
    BuyFormComponent,
    CreaterCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
  ],
  providers: [ScreenTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
