import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config: Configuration) => {
        const paths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };
        config!.resolve!.modules!.push(paths.src);
        config!.resolve!.extensions!.push('.ts', '.tsx');
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };

        config!.module!.rules = config!.module!.rules!.map(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (rule: RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            },
        );

        config!.module!.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config!.module!.rules!.push(buildCssLoader(true));

        config!.plugins!.push(
            new DefinePlugin({
                __IS_DEV__: true,
            }),
        );

        return config;
    },
};
export default config;
