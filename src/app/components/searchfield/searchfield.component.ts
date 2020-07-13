import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
})
export class SearchfieldComponent implements OnInit {
  @Output() changeSelectValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onChangeSelectValue(value: string, event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.changeSelectValue.emit(value);
  }
}
