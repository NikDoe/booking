import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

describe('Тестирование компонента Button', () => {
    test('присутствует ли элемент в документе', () => {
        renderWithTranslation(<LangSwitcher />);
        expect(screen.getByTestId('lang_switcher')).toBeInTheDocument();
    });
});