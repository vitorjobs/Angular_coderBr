import { ProdutcService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  // dataSource: Product
  products: Product[] = []
  displayedColumns = ['id', 'name', 'price']

  constructor(
    private productService: ProdutcService) { }

  // MÉTODO ngOnInit é chamado quando o componente é inicializado
  // Chama o productService, obtem os dados dos produtos, altera o arrya products passando as novas informações
  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products
      console.log(products)
    })
  }

}
