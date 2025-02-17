import { Routes } from '@angular/router';

import { AuthGuard } from '@core/guards';

const ROUTES: Routes = [
    {
        path: 'admin',
        loadComponent: () => import('./layouts/admin/admin.component').then((c) => c.AdminLayoutComponent),
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: () => import('./features/admin/admin.routes')
            }
        ]
    },
    {
        path: 'maintenance',
        loadComponent: () => import('./pages/maintenance/maintenance.component').then((c) => c.PageMaintenanceComponent)
    },
    {
        path: '',
        loadComponent: () => import('./layouts/default/default.component').then((c) => c.DefaultLayoutComponent),
        children: []
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((c) => c.PageNotFoundComponent)
    }
];

export default ROUTES;
