import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-contacts',
    imports: [],
    standalone: true,
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {}
