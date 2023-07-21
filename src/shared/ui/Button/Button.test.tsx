import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';

describe('Тестирование компонента Button', () => {
    test('присутствует ли элемент в документе', () => {
        render(<Button>123</Button>);
        expect(screen.getByText('123')).toBeInTheDocument();
    });

    test('есть ли базовый класс CLEAR', () => {
        render(<Button>123</Button>);
        expect(screen.getByText('123')).toHaveClass('clear');
    });
});