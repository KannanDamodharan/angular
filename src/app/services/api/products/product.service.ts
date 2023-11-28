import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'https://fakestoreapi.com/'

  constructor(private http: HttpClient) { }

  getAllProductswithLimit(limit: number = 5): Observable<ProductRepresentation[]>{
    const productsUrl: string = this.baseUrl + 'products?limit=' + limit;
    return this.http.get<Array<ProductRepresentation>>(productsUrl);
  }

  createProduct(product: ProductRepresentation){
    const productsUrl: string =`${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productsUrl, product);
  }
}
