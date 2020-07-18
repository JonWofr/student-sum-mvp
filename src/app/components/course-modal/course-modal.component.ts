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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickCloseButton(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
    mouseEvent.preventDefault();

    analytics().logEvent('dismiss_item', {
      items: [{ item_name: this._selectedCourse }],
    });

    (document.querySelector('#modal-trigger') as HTMLButtonElement).click();
    (document.querySelector('video') as HTMLVideoElement).pause();
  }

  onClickPurchaseButton(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
    mouseEvent.preventDefault();

    analytics().logEvent('add_to_cart', {
      value: this._selectedCourse.discountedPrice,
      currency: 'EUR',
      items: [{ name: this._selectedCourse.name }],
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
}
