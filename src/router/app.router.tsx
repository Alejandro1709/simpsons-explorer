import { createBrowserRouter } from 'react-router'
import AppLayout from '../layouts/AppLayout'
import IndexPage from '../pages/IndexPage'
import NotFoundPage from '../pages/NotFoundPage'
import SimpsonPage from '../pages/SimpsonPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'characters/:id',
        element: <SimpsonPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
