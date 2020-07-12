import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss'],
})
export class AdvantageComponent implements OnInit {
  @Input() advID = 0;

  constructor() {}

  ngOnInit(): void {}
}
