import { Component, OnInit, OnDestroy } from '@angular/core';
import { initializeApp, analytics } from 'firebase';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'studary';
  routerSubscription: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    initializeApp(environment.firebaseConfig);
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd triggered');
        analytics().logEvent('screen_view', {
          app_name: document.title,
          screen_name: event.urlAfterRedirects,
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
