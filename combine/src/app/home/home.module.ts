import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from '../card/card.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    DetailsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
