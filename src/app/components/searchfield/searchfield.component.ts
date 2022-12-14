import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
})
export class SearchfieldComponent implements OnInit {
  @Input() selectValue = '';
  @Output() changeSelectValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onChangeSelectValue(value: string, event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.changeSelectValue.emit(value);
  }
}
