import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutcService {

  baseUrl = "http://localhost:3001/products"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

 // POST RETORNA UM OBSERVABLE COM AS INFORMAÇÕES DO FORMULÁRIO PARA ENVAR AO BACKEND
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  // GET RETORNA UM OBSERVABLE COM AS INFORMAÇÕES DE PRODUTOS VINDAS DO BACKEND
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
}
