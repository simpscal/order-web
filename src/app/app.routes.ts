import { Routes } from '@angular/router';

const ROUTES: Routes = [
    {
        path: 'maintenance',
        loadComponent: () => import('./pages/maintenance/maintenance.component').then((c) => c.PageMaintenanceComponent)
    },
    {
        path: '',
        loadComponent: () => import('./layouts/default/default.component').then((c) => c.DefaultLayoutComponent),
        children: [
            {
                path: 'products',
                loadChildren: () => import('./features/products/products.routes')
            },
            {
                path: 'stores',
                loadChildren: () => import('./features/stores/stores.routes')
            },
            {
                path: 'contacts',
                loadChildren: () => import('./features/contacts/contacts.routes')
            }
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((c) => c.PageNotFoundComponent)
    }
];

export default ROUTES;
