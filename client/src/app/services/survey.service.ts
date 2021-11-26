import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from '../Survey';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private apiUrl = 'http://localhost:5000/surveys';

  constructor(private http: HttpClient) {}

  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.apiUrl);
  }
}
