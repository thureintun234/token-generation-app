import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Survey } from '../../Survey';

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css'],
})
export class SurveyItemComponent implements OnInit {
  @Input() survey: Survey;
  answers: string[] = [];
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit(): void {
    console.log(this.survey);
  }

  onItemChange(value: string) {
    // if (this.answers.includes(value)) return;
    this.answers.push(value);
    console.log('value: ', value);
    console.log(this.answers);
  }
  // onItemChangeTwo(value: string) {
  //   if (this.answers.includes(value)) return;
  //   this.answers.push(value);
  // }

  // onItemChangeThree(value: string) {
  //   if (this.answers.includes(value)) return;
  //   this.answers.push(value);
  //   console.log(this.answers);
  // }
}
