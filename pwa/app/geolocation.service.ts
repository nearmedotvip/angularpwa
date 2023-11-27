import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpClient) {}

  getLocation(): Observable<any> {
    return this.http.get('https://api.ipify.org?format=json');
  }
}

