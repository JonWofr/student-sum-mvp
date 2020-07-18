import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  display = true;

  constructor(private angularFireAnalytics: AngularFireAnalytics) {}

  ngOnInit(): void {}

  onClickCloseButton(mouseEvent: MouseEvent) {
    mouseEvent.preventDefault();
    mouseEvent.stopPropagation();

    this.angularFireAnalytics
      .logEvent('dismiss_banner')
      .catch((err) =>
        console.error('An error occurred trying to send an event', err)
      );

    this.display = false;
  }
}
