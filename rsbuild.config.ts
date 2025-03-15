import { createConfig } from '@ng-rsbuild/plugin-angular';

export default createConfig({
    options: {
        browser: './src/main.ts',
        tsConfig: './tsconfig.app.json',
        styles: ['./src/styles/style.scss'],
        assets: ['./src/assets/images/favicon.ico', './src/assets'],
        outputPath: './dist/app',
        sourceMap: true,
        namedChunks: true,
        inlineStyleLanguage: 'scss',
        stylePreprocessorOptions: {
            includePaths: ['./src/styles']
        },
        index: './src/index.html',
        polyfills: ['zone.js']
    }
});
