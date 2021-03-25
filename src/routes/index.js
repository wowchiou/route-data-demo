import {
  Home,
  User,
  Store,
  News,
  UserDemoA,
  UserDemoB,
  UserDemoC,
  Sign,
} from '@pages';

export const routes = [
  {
    path: '/news',
    component: News,
    title: 'NEWS',
  },
  {
    path: '/user',
    component: User,
    title: 'USER',
    children: [
      { path: '/user-demo-a', component: UserDemoA, title: 'USER-DEMO-A' },
      { path: '/user-demo-b', component: UserDemoB, title: 'USER-DEMO-B' },
      { path: '/user-demo-c', component: UserDemoC, title: 'USER-DEMO-C' },
    ],
  },
  {
    path: '/store',
    component: Store,
    title: 'STORE',
  },
  {
    path: '/home',
    component: Home,
    title: 'HOME',
  },
  {
    path: '/sign',
    component: Sign,
    title: 'SIGN',
  },
  {
    path: '/',
    component: Home,
    title: 'HOME',
    exact: true,
  },
];

// export default [
//   {
//     path: '/news',
//     component: lazy(() => import('@pages/News')),
//     title: 'NEWS',
//   },
//   {
//     path: '/user',
//     component: lazy(() => import('@pages/User')),
//     title: 'USER',
//   },
//   {
//     path: '/store',
//     component: lazy(() => import('@pages/Store')),
//     title: 'STORE',
//   },
//   {
//     path: '/home',
//     component: lazy(() => import('@pages/Home')),
//     title: 'HOME',
//   },
//   {
//     path: '/',
//     component: lazy(() => import('@pages/Home')),
//     title: 'HOME',
//     exact: true,
//   },
// ];
