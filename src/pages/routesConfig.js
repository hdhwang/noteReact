import {BiTachometer, BiWallet, BiNote, BiNotepad, BiKey, BiUser, BiArchive, BiDice5} from 'react-icons/bi';

const routesConfig = [
  {
    id: 'dashboard',
    messageId: '대시보드',
    type: 'item',
    icon: <BiTachometer />,
    url: '/dashboard',
  },
  {
    id: 'bankAccount',
    messageId: '계좌번호 관리',
    type: 'item',
    icon: <BiWallet />,
    url: '/bank-account',
  },
  {
    id: 'serial',
    messageId: '시리얼 번호 관리',
    type: 'item',
    icon: <BiKey />,
    url: '/serial',
  },
  {
    id: 'note',
    messageId: '노트 관리',
    type: 'item',
    icon: <BiNote />,
    url: '/note',
  },
  {
    id: 'guestBook',
    messageId: '결혼식 방명록',
    type: 'item',
    icon: <BiNotepad />,
    url: '/guest-book',
  },
  {
    id: 'lotto',
    messageId: '로또 번호 생성',
    type: 'item',
    icon: <BiDice5 />,
    url: '/lotto',
  },
  {
    id: 'admin',
    messageId: '관리자 기능',
    type: 'group',
    children: [
      {
        id: 'auditLog',
        messageId: '사용자 관리',
        type: 'item',
        icon: <BiUser />,
        url: '/admin/user-account',
      },
      {
        id: 'auditLog',
        messageId: '감사 로그',
        type: 'item',
        icon: <BiArchive />,
        url: '/admin/audit-log',
      },
    ],
  },
  // {
  //   id: 'app',
  //   title: 'Sample',
  //   messageId: 'sidebar.sample',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'page-1',
  //       title: 'Page 1',
  //       messageId: 'sidebar.sample.page1',
  //       type: 'item',
  //       icon: <BiDesktop />,
  //       url: '/sample/page-1',
  //     },
  //     {
  //       id: 'page-2',
  //       title: 'Page 2',
  //       messageId: 'sidebar.sample.page2',
  //       type: 'item',
  //       icon: <BiDesktop />,
  //       url: '/sample/page-2',
  //     },
  //   ],
  // },
];
export default routesConfig;
