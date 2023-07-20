import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/router';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import { Suspense } from 'react';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Header />
                <div className='page-content'>
                    <AppRouter />
                </div>
                <Footer />
            </Suspense>
        </div>
    );
};

export default App;
