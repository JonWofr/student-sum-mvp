import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

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
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
