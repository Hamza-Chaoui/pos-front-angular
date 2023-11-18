import { Component, OnInit} from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log('Error fetching products:', error);
      }
    );
  }
}
