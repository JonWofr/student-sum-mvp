import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  onChangeSelectValue(value: string): void {
    this.router.navigateByUrl(`search-results/${value}`);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
