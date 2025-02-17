import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    selector: 'app-default-layout-header',
    standalone: true,
    imports: [ToolbarModule, ButtonModule, NgOptimizedImage],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutHeaderComponent {}
