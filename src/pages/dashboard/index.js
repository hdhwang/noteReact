import React from 'react';

const Dashboard = React.lazy(() => import('./Dashboard'));

export const dashboardConfigs = [
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
];
