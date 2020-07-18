import { Component, OnInit } from '@angular/core';
import { analytics } from 'firebase';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  display = true;

  constructor() {}

  ngOnInit(): void {}

  onClickCloseButton(mouseEvent: MouseEvent) {
    mouseEvent.preventDefault();
    mouseEvent.stopPropagation();

    analytics().logEvent('dismiss_banner');
  }
}
