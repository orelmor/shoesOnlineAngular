import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact-area/contact/contact.component';
import { ProductsComponent } from './components/product-area/products/products.component';
import { ProductCardComponent } from './components/product-area/product-card/product-card.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { SundayDiscountComponent } from './components/product-area/sunday-discount/sunday-discount.component';

@NgModule({
  declarations: [
    
  
    LayoutComponent,
            HeaderComponent,
            MenuComponent,
            FooterComponent,
            HomeComponent,
            ContactComponent,
            ProductsComponent,
            ProductCardComponent,
            RouteNotFoundComponent,
            SundayDiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
