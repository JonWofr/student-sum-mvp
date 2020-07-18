import { Component } from '@angular/core';
import { initializeApp, analytics } from 'firebase';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'studary';

  constructor(router: Router) {
    initializeApp(environment.firebaseConfig);
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);
      }
    });
  }
}
