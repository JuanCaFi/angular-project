import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { appsettings } from '../components/api/appsetting';
import { login } from '../components/interfaces/login';
import { Observable } from 'rxjs';
import { responseAccess } from '../components/interfaces/responseaccess';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private http = inject(HttpClient);
  private baseUrl: string = appsettings.apiUrl;
 
  constructor() { }

  login(object:login): Observable<responseAccess> {
    return this.http.post<responseAccess>(`${this.baseUrl}Access/login`, object)
  }
}
