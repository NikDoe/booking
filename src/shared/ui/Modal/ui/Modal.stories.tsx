import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nihil, culpa laboriosam voluptatibus ullam minus in tempora iusto
            nesciunt quidem quisquam, sunt officiis molestiae aliquam autem
            ipsa maiores, iure sequi corporis!
        </p>,
    }
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nihil, culpa laboriosam voluptatibus ullam minus in tempora iusto
            nesciunt quidem quisquam, sunt officiis molestiae aliquam autem
            ipsa maiores, iure sequi corporis!
        </p>,
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];