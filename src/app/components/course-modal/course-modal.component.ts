import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Router } from '@angular/router';
import { AngularFireAnalytics } from '@angular/fire/analytics';

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

  constructor(
    private router: Router,
    private angularFireAnalytics: AngularFireAnalytics
  ) {}

  ngOnInit(): void {}

  onClickCloseButton(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
    mouseEvent.preventDefault();

    this.angularFireAnalytics
      .logEvent('dismiss_modal', {
        value: this._selectedCourse.name,
      })
      .catch((err) =>
        console.error('An error occurred trying to send an event', err)
      );

    if (this.isVideoPlaying) {
      const playDurationInS = (Date.now() - this.videoStartDateInMs) / 1000;
      this.videoStartDateInMs = 0;
      this.angularFireAnalytics
        .logEvent('stop_video', {
          value: playDurationInS,
        })
        .catch((err) =>
          console.error('An error occurred trying to send an event', err)
        );

      this.isVideoPlaying = !this.isVideoPlaying;

      (document.querySelector('video') as HTMLVideoElement).pause();
    }

    (document.querySelector('#modal-trigger') as HTMLButtonElement).click();
  }

  onClickPurchaseButton(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
    mouseEvent.preventDefault();

    this.angularFireAnalytics
      .logEvent('add_to_cart', {
        value: this._selectedCourse.name,
      })
      .catch((err) =>
        console.error('An error occurred trying to send an event', err)
      );

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
      this.angularFireAnalytics
        .logEvent('stop_video', {
          value: playDurationInS,
        })
        .catch((err) =>
          console.error('An error occurred trying to send an event', err)
        );
    } else {
      this.videoStartDateInMs = Date.now();
      this.angularFireAnalytics
        .logEvent('start_video')
        .catch((err) =>
          console.error('An error occurred trying to send an event', err)
        );
    }

    this.isVideoPlaying = !this.isVideoPlaying;
  }
}
