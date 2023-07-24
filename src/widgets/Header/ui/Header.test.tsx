import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent';
import { Header } from 'widgets/Header';

describe('Тестирование виджета Header', () => {
    test('присутствует ли элемент в документе', () => {
        renderComponent(<Header />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
    });
});