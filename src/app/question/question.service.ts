import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class QuestionsService {

  constructor(private http: Http) {}

  getQuestions() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
