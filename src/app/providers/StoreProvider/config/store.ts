import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';

import { StateSchema } from './StateSchema';

export function createReduxStore (initialState: StateSchema) {
    const rootReduser: ReducersMapObject<StateSchema> = {
        user: userReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReduser,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
