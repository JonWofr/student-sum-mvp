import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { analytics } from 'firebase';

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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

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
      analytics().logEvent('view_search_results', {
        search_term: universityCourse,
      });
    });
    xhr.addEventListener('error', (error) => console.error(error));
    xhr.open('GET', '/assets/data/courses.json', true);
    xhr.responseType = 'json';
    xhr.send();
  }

  onChangeSelectValue(value: string): void {
    this.selectValue = value;
    this.filteredCourses = this.filterCoursesBySelectValue(this.courses, value);
    analytics().logEvent('view_search_results', {
      search_term: value,
    });
  }

  filterCoursesBySelectValue(courses: Course[], value: string): Course[] {
    return courses.filter((course) => course.universityCourse === value);
  }

  onClickCourseCard(course: Course) {
    this.selectedCourse = course;

    analytics().logEvent('view_item', { items: [{ item_name: course.name }] });

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
