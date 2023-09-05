import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import livro from './models/livros';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
/*   livro: livro[] = []; */

  constructor(private http: HttpClient) {}

  getBooks(): Observable<livro[]> {
    return this.http.get<livro[]>("http://localhost:3000/livros");
  }
}
