import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getToken():String {
    return localStorage.getItem('interact');
  }
  setToken(token:string){
    localStorage.setItem('interact',token);
  }
}
