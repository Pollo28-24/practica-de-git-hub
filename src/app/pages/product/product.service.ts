import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ProductItem {
  name: string;
  price: number;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject = new BehaviorSubject<ProductItem[]>([
    { name: 'Camisa', price: 35, stock: 12 },
    { name: 'Zapatillas', price: 60, stock: 8 },
    { name: 'Gorra', price: 18, stock: 20 },
  ]);

  products$: Observable<ProductItem[]> = this.productsSubject.asObservable();

  addProduct(product: ProductItem): void {
    this.productsSubject.next([...this.productsSubject.value, product]);
  }
}
