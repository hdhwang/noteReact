import React from 'react';

const Note = React.lazy(() => import('./Note'));

export const noteConfigs = [
  {
    path: '/note',
    element: <Note />,
  },
];
