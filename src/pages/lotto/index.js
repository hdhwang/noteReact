import React from 'react';

const Lotto = React.lazy(() => import('./Lotto'));

export const lottoConfigs = [
  {
    path: '/lotto',
    element: <Lotto />,
  },
];
