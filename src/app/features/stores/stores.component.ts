import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-stores',
    imports: [],
    standalone: true,
    templateUrl: './stores.component.html',
    styleUrl: './stores.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoresComponent {}
