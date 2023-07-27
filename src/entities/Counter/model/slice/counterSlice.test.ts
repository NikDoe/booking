import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('Тестирование counterSlice', () => {
    test('значение в состоянии должно уменьшиться на 1 ', () => {
        const state: CounterSchema = { value: 10 };

        expect(
            counterReducer(state, counterActions.decrement()),
        ).toEqual({ value: 9 });
    });
    test('значение в состоянии должно увеличиться на 1', () => {
        const state: CounterSchema = { value: 10 };

        expect(
            counterReducer(state, counterActions.increment()),
        ).toEqual({ value: 11 });
    });

    test('должно работать если стэйт пустой', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        ).toEqual({ value: 1 });
    });
});
