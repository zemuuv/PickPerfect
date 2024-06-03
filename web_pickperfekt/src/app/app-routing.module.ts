import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {path: '',component: SignupComponent},
  {path: 'animal',component: AnimalComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'login',component: LoginComponent},
  {path: 'logout',component: AppComponent},
  {path: 'menu',component: MenuComponent},
  {path: 'categoria',component: CategoriaComponent},
  {path: 'producto/:nombre',component: ProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
