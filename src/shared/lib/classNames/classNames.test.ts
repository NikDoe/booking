import { classNames } from 'shared/lib/classNames';

describe('Тестирование хэлпера classNames', () => {
    test('Добавление главного класса', () => {
        expect(classNames('main')).toBe('main');
    });

    test('Добавление дополнительных классов', () => {
        const expected = 'main класс-1 класс-2';
        expect(classNames('main', {}, ['класс-1', 'класс-2'])).toBe(expected);
    });

    test('Добавление классов модов', () => {
        const mods = {
            hovered: true,
            selected: true,
        };

        const expected = 'main класс-1 класс-2 hovered selected';

        expect(classNames('main', mods, ['класс-1', 'класс-2'])).toBe(expected);
    });

    test('Классы моды со значением false', () => {
        const mods = {
            hovered: true,
            selected: false,
        };

        const expected = 'main класс-1 класс-2 hovered';

        expect(classNames('main', mods, ['класс-1', 'класс-2'])).toBe(expected);
    });
});