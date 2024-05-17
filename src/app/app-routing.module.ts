import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';
import { Contacto2Component } from './contacto2/contacto2.component';

const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:productId', component: ProductDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact2', component: Contacto2Component},
  //si el path no coincide con ninguna ruta, entonces lo redirigimos a una por defecto, en este caso escogemos a "home"
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
