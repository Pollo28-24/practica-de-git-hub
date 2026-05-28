import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService, ProductItem } from './product.service';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProduct {
  newProduct: Partial<ProductItem> = {
    name: '',
    price: 0,
    stock: 0,
  };

  constructor(private productService: ProductService, private router: Router) {}

  saveProduct(event: Event): void {
    event.preventDefault();

    const name = this.newProduct.name?.trim() ?? '';
    const price = Number(this.newProduct.price ?? 0);
    const stock = Number(this.newProduct.stock ?? 0);

    if (!name || price < 0 || stock < 0) {
      return;
    }

    this.productService.addProduct({ name, price, stock });
    this.router.navigate(['/product']);
  }

  cancel(): void {
    this.router.navigate(['/product']);
  }
}
