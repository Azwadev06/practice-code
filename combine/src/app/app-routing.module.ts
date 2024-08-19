import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products/products.component';
import { DetailsComponent } from './home/details/details.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },


// {
//     path: 'home',
//     component: HomeComponent,
//     children: [
//       { path: 'products', component: ProductsComponent },
//       { path: 'details', component: DetailsComponent },
//     ]
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }