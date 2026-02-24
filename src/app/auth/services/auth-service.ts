import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_URL = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) {}

  // get the login creditials from the component and send it to rest api
  login(credentials: any) {
    console.log(credentials);
    return this.http.post(this.AUTH_URL, credentials);
  }
}
