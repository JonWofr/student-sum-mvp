import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAnalytics } from '@angular/fire/analytics';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private angularFireAnalytics: AngularFireAnalytics
  ) {}

  ngOnInit(): void {
    const universityCourse = this.activatedRoute.snapshot.paramMap.get(
      'universityCourse'
    );
    this.selectValue = universityCourse !== null ? universityCourse : '';
    this.shouldShowSpinner = true;

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', (event: any) => {
      this.shouldShowSpinner = false;
      this.courses = event.target.response;
      this.filteredCourses = this.filterCoursesBySelectValue(
        this.courses,
        universityCourse
      );
      this.angularFireAnalytics
        .logEvent('view_search_results', {
          search_term: universityCourse,
        })
        .catch((err) =>
          console.error('An error occurred trying to send an event', err)
        );
    });
    xhr.addEventListener('error', (error) => console.error(error));
    xhr.open('GET', '/assets/data/courses.json', true);
    xhr.responseType = 'json';
    xhr.send();
  }

  onChangeSelectValue(value: string): void {
    this.selectValue = value;
    this.filteredCourses = this.filterCoursesBySelectValue(this.courses, value);
    this.angularFireAnalytics
      .logEvent('view_search_results', {
        search_term: value,
      })
      .catch((err) =>
        console.error('An error occurred trying to send an event', err)
      );
  }

  filterCoursesBySelectValue(courses: Course[], value: string): Course[] {
    return courses.filter((course) => course.universityCourse === value);
  }

  onClickCourseCard(course: Course) {
    this.selectedCourse = course;

    this.angularFireAnalytics
      .logEvent('view_item', {
        value: course.name,
      })
      .catch((err) =>
        console.error('An error occurred trying to send an event', err)
      );

    if (course.isAvailable) {
      // Used to defer the call of the function to the next tick. Otherwise the modal does not get its data in time.
      setTimeout(() => {
        (document.querySelector(
          'button#modal-trigger'
        ) as HTMLButtonElement).click();
      });
    } else {
      this.router.navigateByUrl('/warenkorb');
    }
  }
}
