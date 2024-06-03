import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  nombreCategoria: string | null = "";
  //agregar una array para productosLista - guiarse del compnoete de animal

  //agregar el el constsructor el objet que instancia al serivcio
  //guiarse del componente de animal
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Recuperar el valor del parámetro 'nombre' de la URL
    this.route.paramMap.subscribe(params => {
      this.nombreCategoria = params.get('nombre');
      console.log('Nombre de la categoría:', this.nombreCategoria);
      // Aquí puedes realizar acciones adicionales con el nombre de la categoría, como cargar productos asociados a esa categoría.
    });
  }

//agregar el ngOnInit - guiarse del de animal

  //ng g s services/producto
  //guiarse de la consulta que se hace en servicio de animal
  //se debe pasar el dato de nombreCategoria, se debe pasar como un array
  //guiarse de la consulta que se hace en componente de animal
  getAllProductosData(){ //guiarse del de animal
    //llamado al método del servicio
    this.nombreCategoria; //lo diferente es que deben pasar este datos como un array
  }
}
