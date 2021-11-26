import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Survey } from '../../Survey';
import { SurveyService } from '../../services/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {
  surveys: Survey[] = [];

  constructor(private surveyService: SurveyService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.surveys);
    this.surveyService
      .getSurveys()
      .subscribe((surveys) => (this.surveys = surveys));
  }

  generateToken(tokenLength: number) {
    let randomCharacters =
      'ABCDEFGHIJKMNLOPQRSDUVWHYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < tokenLength; i++) {
      result += randomCharacters.charAt(
        Math.floor(Math.random() * randomCharacters.length)
      );
    }
    return result;
  }

  onSubmit() {
    this.router.navigate(['/token', { token: this.generateToken(20) }]);
  }
}
