import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

import { PAGE_ROUTES } from '@app/shared/constants';

@Component({
    selector: 'app-default-layout-header',
    standalone: true,
    imports: [ToolbarModule, ButtonModule, RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutHeaderComponent {
    PAGE_ROUTES = PAGE_ROUTES;

    onLogin() {}
}
