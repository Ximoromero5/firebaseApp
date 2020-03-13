import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];
  editing: boolean = false;
  editingProduct: Product;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

  deleteProduct(event, product) {
    this.productService.deleteProduct(product);
  }

  editProduct(event, product) {
    this.editing = !this.editing;
    this.editingProduct = product;
  }

  updateProduct() {
    this.productService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
  }
}
