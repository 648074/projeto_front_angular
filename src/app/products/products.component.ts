import { LivroService } from './../livro.service';
import Livro from './../models/livros';
import { ProductService } from './../product.service';
import { Product } from './../models/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  Products: Product[] = [];
  livros: Livro[] = [];

  constructor(/* private prodService: ProductService,  */private livroService: LivroService) {}

  ngOnInit(): void {
    //this.Products = this.prodService.getProducts();
    this.livroService.getBooks().subscribe({
      next: livros =>  this.livros = livros
    });
  }
}
