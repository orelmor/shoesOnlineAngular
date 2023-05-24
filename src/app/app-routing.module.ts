import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-area/home/home.component';
import { ProductsComponent } from './components/product-area/products/products.component';
import { ContactComponent } from './components/contact-area/contact/contact.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"products", component: ProductsComponent},
  {path:"contact", component: ContactComponent},
  {path:"**", component: RouteNotFoundComponent},
  {path:"",redirectTo: "/home",pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
