import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.DEFAULT
    },
};

export const DefaultDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.DEFAULT
    },
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Primary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];