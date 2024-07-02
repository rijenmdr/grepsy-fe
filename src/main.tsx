import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import theme from './utils/theme/index.ts';
import { setupInterceptorsToInspection } from './services/api.ts';
import './index.css';

const queryClient = new QueryClient();
export const Axios = setupInterceptorsToInspection(axios.create());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
