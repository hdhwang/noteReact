import React from 'react';

const BankAccount = React.lazy(() => import('./BankAccount'));

export const bankAccountConfigs = [
  {
    path: '/bank-account',
    element: <BankAccount />,
  },
];
