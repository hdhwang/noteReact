import React from 'react';

const UserAccount = React.lazy(() => import('./UserAccount'));
const AuditLog = React.lazy(() => import('./AuditLog'));

export const adminConfigs = [
  {
    path: '/admin/user-account',
    element: <UserAccount />,
  },
  {
    path: '/admin/audit-log',
    element: <AuditLog />,
  },
];
