import type { Meta, StoryObj } from '@storybook/react';

import { Counter } from './Counter';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta = {
    title: 'entities/Counter',
    component: Counter,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        counter: {
            value: 0,
        }
    })]
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];