import { Routes } from '@angular/router';

import { StoresComponent } from './stores.component';

const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: StoresComponent
    }
];

export default ROUTES;
