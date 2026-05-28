import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, ProductItem } from './product.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Product {
  get products$() {
    return this.productService.products$;
  }

  isModalOpen = false;
  newProduct: Partial<ProductItem> = {
    name: '',
    price: 0,
    stock: 0,
  };

  constructor(private productService: ProductService) {}

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.resetForm();
  }

  addProduct(event: Event): void {
    event.preventDefault();

    const name = this.newProduct.name?.trim() ?? '';
    const price = Number(this.newProduct.price ?? 0);
    const stock = Number(this.newProduct.stock ?? 0);

    if (!name || price < 0 || stock < 0) {
      return;
    }

    this.productService.addProduct({ name, price, stock });
    this.closeModal();
  }

  resetForm(): void {
    this.newProduct = {
      name: '',
      price: 0,
      stock: 0,
    };
  }
}
