import { screen } from '@testing-library/react';
import { renderComponent } from '@/shared/lib/tests/renderComponent';

import { Counter } from './Counter';

describe('Тестирование сущности Counter', () => {
    test('значени из state value рендериться на странице', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
});
