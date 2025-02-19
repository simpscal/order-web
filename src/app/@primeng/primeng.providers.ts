// https://github.com/primefaces/primeng/tree/master/packages/themes/src/presets
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';

import BUTTON_PRESET from './components/button.present';
import SEMANTIC_PRESET from './semantic.preset';

const PRIMENG_PROVIDERS = [
    providePrimeNG({
        theme: {
            preset: definePreset(Aura, {
                primitive: {},
                semantic: SEMANTIC_PRESET,
                components: {
                    button: BUTTON_PRESET
                }
            }),
            options: {
                darkModeSelector: '[data-mode="dark"]',
                cssLayer: {
                    name: 'primeng',
                    order: 'tailwind, primeng, custom-primeng'
                }
            }
        }
    }),
    MessageService
];

export default PRIMENG_PROVIDERS;
