import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => Story => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);