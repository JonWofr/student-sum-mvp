import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Views
import { HomeComponent } from './views/home/home.component';
import { SearchResultsComponent } from './views/search-results/search-results.component';
import { ContactComponent } from './views/contact/contact.component';
import { CompanyInformationComponent } from './views/company-information/company-information.component';
import { BuyFormComponent } from './views/buy-form/buy-form.component';

const routes: Routes = [
  {
    path: 'search-results/:universityCourse',
    component: SearchResultsComponent,
  },
  {
    path: 'search-results',
    component: SearchResultsComponent,
  },
  {
    path: 'warenkorb',
    component: BuyFormComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'company-information',
    component: CompanyInformationComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
