import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('mainPage');

    return <h1>{t('Главная страница')}</h1>;
};

export default MainPage;
