import { ProdutcService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private produtcService: ProdutcService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  createProduct() : void {
    this.produtcService.showMessage('Produto Criado')
  }

  cancel() : void {
    this.router.navigate(['/products'])
  }
}
