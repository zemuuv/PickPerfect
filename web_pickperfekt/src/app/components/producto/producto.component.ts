import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productoList: any = [];
  user = 'Usuario';
  selectedProduct: any = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productoService.getAllProducts(localStorage.getItem('accessToken')).subscribe(
      (data: any) => {
        this.productoList = data;
      }
    );
  }

  openModal(producto: any) {
    this.selectedProduct = producto;
    const modalElement = document.getElementById('productModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
