import React from 'react';

const Serial = React.lazy(() => import('./Serial'));

export const serialConfigs = [
  {
    path: '/serial',
    element: <Serial />,
  },
];
