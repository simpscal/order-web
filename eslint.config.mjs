import tsParser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: ['**/*.spec.ts', '**/*.\\{html,css,scss,md,yml}', '**/node_modules', '**/e2e', '**/build']
    },
    {
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',

            parserOptions: {
                project: './tsconfig.eslint.json'
            }
        }
    },
    ...compat
        .extends(
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:@angular-eslint/recommended',
            'plugin:@angular-eslint/template/process-inline-templates',
            'plugin:prettier/recommended'
        )
        .map((config) => ({
            ...config,
            files: ['**/*.ts']
        })),
    {
        files: ['**/*.ts'],

        plugins: {
            'simple-import-sort': simpleImportSort
        },

        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase'
                }
            ],

            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case'
                }
            ],

            '@angular-eslint/prefer-on-push-component-change-detection': ['error'],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            'no-array-constructor': 'off',
            'no-loss-of-precision': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-require-imports': 'error',
            '@typescript-eslint/no-use-before-define': 'error',
            '@typescript-eslint/naming-convention': 'off',
            '@typescript-eslint/adjacent-overload-signatures': 'error',
            '@typescript-eslint/array-type': 'off',
            '@typescript-eslint/ban-tslint-comment': 'error',
            '@typescript-eslint/class-literal-property-style': 'error',
            '@typescript-eslint/consistent-generic-constructors': 'error',
            '@typescript-eslint/consistent-indexed-object-style': 'error',
            '@typescript-eslint/consistent-type-assertions': 'error',
            '@typescript-eslint/consistent-type-definitions': 'error',
            '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
            'no-empty-function': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-inferrable-types': 'warn',
            '@typescript-eslint/prefer-for-of': 'warn',
            '@typescript-eslint/prefer-function-type': 'error',
            '@typescript-eslint/prefer-namespace-keyword': 'error',

            '@typescript-eslint/no-misused-promises': [
                'off',
                {
                    checksConditionals: false
                }
            ],

            '@typescript-eslint/no-non-null-assertion': 'error',

            '@typescript-eslint/restrict-template-expressions': [
                'error',
                {
                    allowNumber: true,
                    allowBoolean: true,
                    allowAny: true,
                    allowNullish: false
                }
            ],

            '@typescript-eslint/unified-signatures': 'error',
            '@typescript-eslint/prefer-optional-chain': 'warn',
            '@typescript-eslint/member-ordering': 'off',
            '@typescript-eslint/unbound-method': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/dot-notation': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-parameter-properties': 'off',

            '@typescript-eslint/no-shadow': [
                'off',
                {
                    hoist: 'all'
                }
            ],

            '@typescript-eslint/explicit-member-accessibility': [
                'off',
                {
                    accessibility: 'explicit'
                }
            ],

            eqeqeq: ['error', 'smart'],
            'no-bitwise': 'error',
            'no-caller': 'error',
            'no-cond-assign': 'error',

            'no-console': [
                'error',
                {
                    allow: [
                        'info',
                        'dirxml',
                        'warn',
                        'error',
                        'dir',
                        'timeLog',
                        'assert',
                        'clear',
                        'count',
                        'countReset',
                        'group',
                        'groupCollapsed',
                        'groupEnd',
                        'table',
                        'Console',
                        'markTimeline',
                        'profile',
                        'profileEnd',
                        'timeline',
                        'timelineEnd',
                        'timeStamp',
                        'context'
                    ]
                }
            ],

            'no-debugger': 'error',
            'no-eval': 'error',
            'no-throw-literal': 'error',
            'no-trailing-spaces': 'error',
            'no-undef-init': 'error',
            'no-unsafe-finally': 'error',
            'no-unused-labels': 'error',
            'no-var': 'error',

            'no-restricted-imports': [
                'error',
                {
                    paths: [
                        {
                            name: 'rxjs/Rx',
                            message: "Please import directly from 'rxjs' instead"
                        }
                    ]
                }
            ],

            'object-curly-spacing': ['error', 'always'],
            'prefer-const': 'error',
            'prefer-object-spread': 'error',
            'constructor-super': 'error',
            curly: 'error',
            'eol-last': 'error',
            'guard-for-in': 'error',

            'id-denylist': [
                'error',
                'any',
                'Number',
                'String',
                'string',
                'Boolean',
                'boolean',
                'Undefined',
                'undefined'
            ],

            'new-parens': 'error',
            'one-var': ['error', 'never'],
            'quote-props': ['error', 'as-needed'],
            radix: 'error',
            'use-isnan': 'error',

            'space-before-function-paren': [
                'error',
                {
                    anonymous: 'never',
                    asyncArrow: 'always',
                    named: 'never'
                }
            ],

            'object-shorthand': 'warn',
            'no-duplicate-case': 'warn',
            'no-multi-spaces': 'warn',
            'no-useless-return': 'warn',
            'no-else-return': 'warn',
            'no-constant-condition': 'warn',
            'no-dupe-else-if': 'warn',
            'no-extra-bind': 'warn',
            'no-irregular-whitespace': 'warn',
            'no-new-func': 'warn',
            'no-new-wrappers': 'warn',
            'no-redeclare': 'warn',
            'no-return-await': 'warn',
            'no-sequences': 'warn',
            'no-sparse-arrays': 'warn',
            'no-template-curly-in-string': 'warn',
            'no-extra-boolean-cast': 'warn',

            'padding-line-between-statements': [
                'warn',
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'return'
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'try'
                },
                {
                    blankLine: 'always',
                    prev: 'try',
                    next: '*'
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'block-like'
                },
                {
                    blankLine: 'always',
                    prev: 'block-like',
                    next: '*'
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'throw'
                },
                {
                    blankLine: 'always',
                    prev: 'var',
                    next: '*'
                }
            ],

            'lines-between-class-members': 'off',
            'arrow-body-style': 'off',
            'arrow-parens': 'off',
            'no-implicit-coercion': 'off',
            'no-shadow': 'off',
            'no-duplicate-imports': 'off',
            'valid-typeof': 'off',
            'ban-ts-ignore': 'off',
            'comma-dangle': 'off',
            complexity: 'off',
            'import/order': 'off',
            'max-classes-per-file': 'off',
            'no-empty': 'off',
            'no-fallthrough': 'off',
            'no-invalid-this': 'off',
            'no-underscore-dangle': 'off',

            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        [
                            '^@angular.*core',
                            '^@angular.*',
                            '^rxjs.*',
                            '^@ngxs.*',
                            '^lodash.*',
                            '^devextreme.*',
                            '^@?\\w'
                        ],
                        [
                            '^@?(app|src|core)(/.*)(guards?$)',
                            '^@?(app|src|core)(/.*)(pipes?$)',
                            '^@?(app|src|core)(/.*)(directives?$)'
                        ],
                        [
                            '^@?(app|src|core|layouts|store|widgets)(/.*)(helpers?$)',
                            '^@?(app|src|core|layouts|store|widgets)(/.*)(utilities?$)'
                        ],
                        ['^@?(app|src|layouts|widgets)(/.*)(modules?$)'],
                        [
                            '^@?(app|src|core|layouts|store|widgets)(/.*)(shared)',
                            '^@?(app|src|core|layouts|store|widgets)(/.*)(constants?$)',
                            '^@?(app|src|core|layouts|store|widgets)(/.*)(enums?$)',
                            '^@?(app|src|core|layouts|store|widgets)(/.*)(models?$)'
                        ],
                        [
                            '^@?(app|src|layouts|widgets)(/.*)(components?$)',
                            '^@?(app|src|core|widgets)(/.*)(services?$)'
                        ],
                        [
                            '^@?store(/.)*',
                            '^@?(app|src|store)(/.*)(actions?$)',
                            '^@?(app|src|store)(/.*)(selectors?$)',
                            '^@?(app|src|store)(/.*)(states?$)',
                            '^@?(app|src|store)(/.*)(stores?$)'
                        ],
                        ['^(\\.{1,2})(/.*)(helpers?$)', '^(\\.{1,2})(/.*)(utilities?$)'],
                        [
                            '^(\\.{1,2})(/.*)(shared$)',
                            '^(\\.{1,2})(/.*)(constants?$)',
                            '^(\\.{1,2})(/.*)(enums?$)',
                            '^(\\.{1,2})(/.*)(models?$)'
                        ],
                        ['^(\\.{1,2})(/.*)(components?$)', '^(\\.{1,2})(/.*)(services?$)'],
                        [
                            '^(\\.{1,2})(/.*)(actions?$)',
                            '^(\\.{1,2})(/.*)(selectors?$)',
                            '^(\\.{1,2})(/.*)(states?$)',
                            '^(\\.{1,2})(/.*)(stores?$)'
                        ]
                    ]
                }
            ],

            'simple-import-sort/exports': 'warn',
            'prettier/prettier': 'warn'
        }
    },
    ...compat
        .extends('plugin:@angular-eslint/template/recommended', 'plugin:@angular-eslint/template/accessibility')
        .map((config) => ({
            ...config,
            files: ['**/*.html']
        })),
    {
        files: ['**/*.html'],

        rules: {
            '@angular-eslint/template/click-events-have-key-events': 'off',
            '@angular-eslint/template/mouse-events-have-key-events': 'off',
            '@angular-eslint/template/interactive-supports-focus': 'off',

            '@angular-eslint/template/attributes-order': [
                'warn',
                {
                    alphabetical: true
                }
            ]
        }
    }
];
