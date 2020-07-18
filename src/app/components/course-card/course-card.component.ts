import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course';
import { AngularFireAnalytics } from '@angular/fire/analytics';

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

  constructor(private angularFireAnalytics: AngularFireAnalytics) {}

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

    this.angularFireAnalytics
      .logEvent('click_rating', {
        value: this._course.name,
      })
      .catch((err) =>
        console.error('An error occurred trying to send an event', err)
      );
  }
}
