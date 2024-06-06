import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service'; 

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productoList: any = [];
  user = 'Usuario';

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productoService.getAllProducts(localStorage.getItem('accessToken')).subscribe(
      (data: any) => { // Corregí el tipo de data
        this.productoList = data;
      }
    );
  }
}
