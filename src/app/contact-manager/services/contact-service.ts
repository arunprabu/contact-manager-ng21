import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {
    console.log('Inside Contact Service Constructor');
  }

  // 1. get the request from the component
  getContacts() {
    console.log('3. Inside Service');
    // 2. send the request to the REST API
    // 2.1. What's the REST API URL: https://jsonplaceholder.typicode.com/users
    // 2.2. What's the HTTP method: GET
    // 2.3. What's the HTTP Client? HttpClient
    return this.http.get('https://jsonplaceholder.typicode.com/users');
    // 3. get the response from the REST API
    // 4. send the response back to the component
  }

  addContact(contact: any) {
    // form data from the component
    console.log(contact);

    return this.http.post('https://jsonplaceholder.typicode.com/users', contact);
  }

  getContactById(id: string | number) {
    console.log('contact Id : ' + id);
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
