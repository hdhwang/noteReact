import React from 'react';

const GuestBook = React.lazy(() => import('./GuestBook'));

export const guestBookConfigs = [
  {
    path: '/guest-book',
    element: <GuestBook />,
  },
];
