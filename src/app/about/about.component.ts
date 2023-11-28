import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private service: ProductService) { }
  
  ngOnInit(): void {
    const product: ProductRepresentation = {
      title: 'My product',
      description: 'Product description',
      price: 12,
      category: 'Any category',
      image: 'https://some-image.jpg'
    }

    this.service.createProduct(product)
      .subscribe({
        next: (result: ProductRepresentation): void =>{
          console.log(result);
        },
        error: (error: HttpErrorResponse): void => {
          if(error instanceof ErrorEvent){
            console.error('An error occurred:', error['error']);
          }
          else{
            //server side error
            console.error(`Server returned status code ${error.status}, error message: ${error.message}`);

          }
        }
      });
    // this.service.getAllProductswithLimit()
    // .subscribe({
    //     next: (data: ProductRepresentation[]): void =>{
    //       console.log(data);
    //     }
    // })
  }
}
