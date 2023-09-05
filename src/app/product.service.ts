import { Product } from './models/products';
import { ProductsComponent } from './products/products.component';
import { Injectable } from '@angular/core';
import livro from './models/livros';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  livro: livro[] = [];

  constructor() {
    this.products.push({ id: 1, name: 'Carro', price: 2 });
    this.products.push({ id: 2, name: 'Vassora', price: 15000 });
    this.products.push({ id: 3, name: 'Amendoim', price: 160 });

    
  }

  getProducts(): Product[] {
    return this.products;
  }
}
