import React from 'react';

const LotteMainContainer = React.lazy(() =>
  import('./page/lotte/LotteMainContainer')
);
const LotteResultContainer = React.lazy(() =>
  import('./page/lotte/LotteResultContainer')
);
const LotteStartContainer = React.lazy(() =>
  import('./page/lotte/LotteStartContainer')
);

const Page404 = React.lazy(() => import('./error/Page404'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  {
    path: '/lotte/main',
    name: 'LotteMain',
    component: LotteMainContainer,
  },
  {
    path: '/lotte/start',
    name: 'LotteStart',
    component: LotteStartContainer,
  },
  {
    path: '/lotte/result',
    name: 'LotteResult',
    component: LotteResultContainer,
  },
  {
    path: '/404',
    name: 'Page404',
    component: Page404,
  },
];

export default routes;
