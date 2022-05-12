import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fact } from '../model/Fact';

@Injectable({
  providedIn: 'root',
})
export class GetFactService {
  constructor(private http: HttpClient) {}
  getFact(): Observable<Fact> {
    return this.http.get<Fact>('https://catfact.ninja/fact');
  }
}
