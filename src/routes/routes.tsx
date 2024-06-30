import React from 'react';

const Datasets = React.lazy(() => import('../pages/datasets'));
const WorkFlows = React.lazy(() => import('../pages/workflows'));
const CreditUsage = React.lazy(() => import('../pages/credit-usage'));

export const routes = [
  {
    path: '/datasets',
    component: Datasets,
    exact: true,
    name: 'Datasets'
  },
  {
    path: '/workflows',
    component: WorkFlows,
    exact: true,
    name: 'WorkFlows'
  },
  {
    path: '/credit-usage',
    component: CreditUsage,
    exact: true,
    name: 'CreditUsage'
  }
];
