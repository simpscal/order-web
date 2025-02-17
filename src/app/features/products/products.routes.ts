import { Routes } from '@angular/router';

import { ProductsComponent } from './products.component';

const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ProductsComponent
    }
];

export default ROUTES;
