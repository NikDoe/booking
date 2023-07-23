import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR
    },
};

export const ClearDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR
    },
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Primary: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.PRIMARY
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.PRIMARY
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.SECONDARY
    },
};

export const SecondaryDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.SECONDARY
    },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];