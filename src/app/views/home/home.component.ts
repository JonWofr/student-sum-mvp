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

  toggleCalculator = false;

  onClick() {
    this.toggleCalculator = !this.toggleCalculator;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
