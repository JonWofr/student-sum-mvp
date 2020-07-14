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
  @Input() selectedCourse: Course;

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
}
