import { useRoutes } from 'react-router-dom';
import path from './constants/path';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
const useRouterElements = () => {
    const routeElements = useRoutes([
        {
            path: '',
            element: <MainLayout />,
            children: [
                {
                    path: path.home,
                    element: <HomePage />,
                },
            ],
        },
    ]);
    return routeElements;
};

export default useRouterElements;
