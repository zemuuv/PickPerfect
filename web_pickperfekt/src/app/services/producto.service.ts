import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  apiUri = '/api/products';

  constructor(private http: HttpClient) { }

  getAllProducts(token: any): Observable<any> {
    return this.http.get(this.apiUri, {
      headers: {
        'Content-Type': 'application/json',
        accessToken: `${token}`
      }
    });
  }

}



