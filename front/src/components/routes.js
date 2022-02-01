import { Navigate, Outlet } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const routes = (isLoggedIn) => [
  {
    path: '/app',
    element: isLoggedIn ? <Dashboard /> : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      // { path: '/account', element: <Account /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      // {
      //   path: 'member',
      //   element: <Outlet />,
      //   children: [
      //     { path: '/', element: <MemberGrid /> },
      //     { path: '/add', element: <AddMember /> },
      //   ],
      // },
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <Dashboard /> : <Navigate to="/app/dashboard" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
