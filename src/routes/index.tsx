import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import DashboardLayout from '../components/layout/DashboardLayout';
import { routes } from './routes';

const RouteProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/datasets" />} />

          {routes.map(({ component: Component, path, ...rest }) => {
            return (
              <Route
                key={path}
                path={path}
                {...rest}
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteProvider;
