import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/shared/config/routerConfig/routerConfig';
import { PageLoader } from '@/widgets/PageLoader';

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routerConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
