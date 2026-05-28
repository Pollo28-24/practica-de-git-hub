import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { ViewProyect } from './pages/viewProyect/viewProyect';

export const routes: Routes = [
    {
        path: 'home',
        component: Home,
    },
    {
      path: 'product',
      component: Product,
      pathMatch: 'full',
    },
       {
        path: 'viewProyect',
        component: ViewProyect,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
