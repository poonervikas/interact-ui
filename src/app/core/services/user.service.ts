import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    ) { }

  attemptAuth(type, credentials) {
    const url = type === 'login' ? '/signin' : '/signup';
    return this.http.post(environment.api_url + '/auth' + url, credentials);
  }

}
