import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss'],
})
export class VideoContainerComponent implements OnInit {
  @Input() course: Course;

  starValues = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}
}
