import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductServiceService } from '../services/product-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm!: FormGroup;

  constructor(
    private productService: ProductServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      this.productService.addProduct(newProduct).subscribe(
        (data: any) => {
          console.log('Product added:', data);
          this.productForm.reset();
        },
        (error: any) => {
          console.log('Error adding product:', error);
        },
        () => {
          console.log('Observable completed.');
        }
      );
    }
  }
  
}
