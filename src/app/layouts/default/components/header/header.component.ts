import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { ToolbarModule } from 'primeng/toolbar';

import { PAGE_ROUTES } from '@app/shared/constants';

@Component({
    selector: 'app-default-layout-header',
    standalone: true,
    imports: [ToolbarModule, ButtonModule, DrawerModule, RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutHeaderComponent {
    PAGE_ROUTES = PAGE_ROUTES;

    drawerVisible = signal(false);

    onLogin() {}
}
