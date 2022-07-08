import { ProdutcService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Teste',
    price: 10.00
  }

  constructor(
    private produtcService: ProdutcService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  createProduct() : void {
    this.produtcService.create(this.product).subscribe(() =>{
      this.produtcService.showMessage('Produto Criado')
      this.router.navigate(['/products'])
    })
    
  }

  cancel() : void {
    this.router.navigate(['/products'])
  }
}
