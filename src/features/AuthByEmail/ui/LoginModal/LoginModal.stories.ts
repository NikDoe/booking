import type { Meta, StoryObj } from '@storybook/react';

import { LoginModal } from './LoginModal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
    tags: ['autodocs'],
    args: {
        isOpen: true,
        onClose: () => {}
    }
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];