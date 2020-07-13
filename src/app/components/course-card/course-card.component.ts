import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;

  starValues = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}
}
