import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  categoriaList: any = [];
  user = 'Usuario';
  constructor(private categoriaService: CategoriaService) {
  }

  ngOnInit() {
    this.getAllCategorias();
  }


  getAllCategorias() {
    this.categoriaService.getAllCategoriasData(localStorage.getItem('accessToken')).subscribe(
      (data: {}) => {
        this.categoriaList = data
      }
    );
  }

  verProductos(categoria: String){
    console.log(categoria);
  }

}
