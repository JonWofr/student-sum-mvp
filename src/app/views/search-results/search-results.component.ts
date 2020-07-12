import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  courses: Course[] = [];

  constructor() {}

  ngOnInit(): void {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', (event: any) => {
      console.log(event.target.response);
      this.courses = event.target.response;
    });
    xhr.addEventListener('error', (error) => console.error(error));
    xhr.open('GET', '/assets/data/courses.json', true);
    xhr.responseType = 'json';
    xhr.send();
  }
}
