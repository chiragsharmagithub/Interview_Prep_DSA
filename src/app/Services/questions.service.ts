import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DSAQues } from '../Models/DSAQues.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:7000/blind75";

  url_category_ques = "http://localhost:7000/Questions";

  getQuestions() : Observable<DSAQues[]> {
    return this.http.get<DSAQues[]>(this.url);
  }

  getCategoryQuestions() : Observable<any> {
    return this.http.get<any>(this.url_category_ques);
  }


}
