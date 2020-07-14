import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

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

  onClickPurchaseButton(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
    mouseEvent.preventDefault();

    firebase
      .analytics()
      .logEvent(
        'Clicked modal purchase button of course with name: ' +
          this.selectedCourse.name
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
}
