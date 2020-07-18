import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course';
import { analytics } from 'firebase';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() set course(course: Course) {
    this.duration = this.calculateDuration(course.duration);
    this._course = course;
  }

  _course: Course;
  duration: string;
  starValues = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}

  calculateDuration(durationInMin): string {
    if (durationInMin === 'N/A') {
      return 'N/A';
    }
    return (
      Math.floor(durationInMin / 60) + ' Std. ' + (durationInMin % 60) + ' Min.'
    );
  }

  onClickRating(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
    mouseEvent.preventDefault();

    analytics().logEvent('show_reviews', {
      items: [{ item_name: this._course.name }],
    });
  }
}
