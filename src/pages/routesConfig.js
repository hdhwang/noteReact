import {BiTachometer, BiWallet, BiNote, BiNotepad, BiKey, BiUser, BiArchive, BiDice5} from 'react-icons/bi';

const routesConfig = [
  {
    id: 'dashboard',
    title: '대시보드',
    messageId: 'sidebar.dashboard',
    type: 'item',
    icon: <BiTachometer />,
    url: '/dashboard',
  },
  {
    id: 'bank-account',
    title: '계좌번호 관리',
    messageId: 'sidebar.bankAccount',
    type: 'item',
    icon: <BiWallet />,
    url: '/bank-account',
  },
  {
    id: 'serial',
    title: '시리얼 번호 관리',
    messageId: 'sidebar.serial',
    type: 'item',
    icon: <BiKey />,
    url: '/serial',
  },
  {
    id: 'note',
    title: '노트 관리',
    messageId: 'sidebar.note',
    type: 'item',
    icon: <BiNote />,
    url: '/note',
  },
  {
    id: 'guest-book',
    title: '결혼식 방명록',
    messageId: 'sidebar.guestBook',
    type: 'item',
    icon: <BiNotepad />,
    url: '/guest-book',
  },
  {
    id: 'lotto',
    title: '로또 번호 생성',
    messageId: 'sidebar.lotto',
    type: 'item',
    icon: <BiDice5 />,
    url: '/lotto',
  },
  {
    id: 'admin',
    title: '관리자 기능',
    messageId: 'sidebar.admin',
    type: 'group',
    children: [
      {
        id: 'user-account',
        title: '사용자 관리',
        messageId: 'sidebar.admin.userAccount',
        type: 'item',
        icon: <BiUser />,
        url: '/admin/user-account',
      },
      {
        id: 'audit-log',
        title: '감사 로그',
        messageId: 'sidebar.admin.auditLog',
        type: 'item',
        icon: <BiArchive />,
        url: '/admin/audit-log',
      },
    ],
  },
];
export default routesConfig;
