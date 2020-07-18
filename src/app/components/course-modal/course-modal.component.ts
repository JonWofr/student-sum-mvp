import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Router } from '@angular/router';
import { analytics } from 'firebase';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss'],
})
export class CourseModalComponent implements OnInit {
  @Input() set selectedCourse(selectedCourse: Course) {
    this.duration = this.calculateDuration(selectedCourse.duration);
    this._selectedCourse = selectedCourse;
  }

  _selectedCourse: Course;
  duration: string;
  starValues = [1, 2, 3, 4, 5];
  isVideoPlaying = false;
  videoStartDateInMs: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickCloseButton(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
    mouseEvent.preventDefault();

    analytics().logEvent('close_modal', {
      item_name: this._selectedCourse.name,
    });

    if (this.isVideoPlaying) {
      const playDurationInS = (Date.now() - this.videoStartDateInMs) / 1000;
      this.videoStartDateInMs = 0;
      analytics().logEvent('stop_video', {
        duration_in_s: playDurationInS,
      });

      this.isVideoPlaying = !this.isVideoPlaying;

      (document.querySelector('video') as HTMLVideoElement).pause();
    }

    (document.querySelector('#modal-trigger') as HTMLButtonElement).click();
  }

  onClickPurchaseButton(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
    mouseEvent.preventDefault();

    analytics().logEvent('add_to_cart', {
      value: this._selectedCourse.discountedPrice,
      currency: 'EUR',
      items: [{ item_name: this._selectedCourse.name }],
    });

    (document.querySelector('#modal-trigger') as HTMLButtonElement).click();
    this.router.navigateByUrl('warenkorb');
  }

  calculateDuration(durationInMin): string {
    if (durationInMin === 'N/A') {
      return 'N/A';
    }
    return (
      Math.floor(durationInMin / 60) + ' Std. ' + (durationInMin % 60) + ' Min.'
    );
  }

  onChangeVideo(event): void {
    console.log(event);

    if (this.isVideoPlaying) {
      const playDurationInS = (Date.now() - this.videoStartDateInMs) / 1000;
      this.videoStartDateInMs = 0;
      analytics().logEvent('stop_video', {
        duration_in_s: playDurationInS,
      });
    } else {
      this.videoStartDateInMs = Date.now();
      analytics().logEvent('start_video');
    }

    this.isVideoPlaying = !this.isVideoPlaying;
  }
}
