import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  selectValue: string;
  selectedCourse: Course;
  shouldShowSpinner = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', (event: any) => {
      this.shouldShowSpinner = false;
      this.courses = event.target.response;
      this.filteredCourses = this.filterCoursesBySelectValue(
        this.courses,
        'hdm'
      );
    });
    xhr.addEventListener('error', (error) => console.error(error));
    xhr.open('GET', '/assets/data/courses.json', true);
    xhr.responseType = 'json';
    xhr.send();
    this.shouldShowSpinner = true;
    const university = this.activatedRoute.snapshot.paramMap.get('university');
    this.selectValue = university !== null ? university : '';
  }

  onChangeSelectValue(value: string): void {
    this.selectValue = value;
    this.filteredCourses = this.filterCoursesBySelectValue(this.courses, value);
  }

  filterCoursesBySelectValue(courses: Course[], value: string): Course[] {
    return courses.filter((course) => course.university === value);
  }

  onClickCourseCard(course: Course) {
    this.selectedCourse = course;

    // Used to defer the call of the function to the next tick. Otherwise the modal does not get its data in time.
    setTimeout(() => {
      (document.querySelector(
        'button#modal-trigger'
      ) as HTMLButtonElement).click();
    });
  }
}
