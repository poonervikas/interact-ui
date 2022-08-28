import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  postQuestion(questionBody: any, eventId: number) {
    return this.http.post(environment.api_url + `/qna/post/${eventId}`, questionBody);
  }

  fetchAllQuestionsOfEvent(eventId: number,questionFilter:string) {
    return this.http.get(environment.api_url + `/qna/event/${eventId}?sortBy=${questionFilter}`);
  }

  likeQuestion(questionId){
    return this.http.put(environment.api_url+`/qna/like/${questionId}`,{});
  }
  unlikeQuestion(questionId){
    return this.http.put(environment.api_url+`/qna/unlike/${questionId}`,{});
  }
}
