import { Routes } from '@angular/router';

import { ContactsComponent } from './contacts.component';

const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ContactsComponent
    }
];

export default ROUTES;
