import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultLayoutHeaderComponent } from './components';

@Component({
    selector: 'app-default-layout',
    styleUrl: './default.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule, DefaultLayoutHeaderComponent],
    templateUrl: './default.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent {}
