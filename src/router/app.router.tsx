import { createBrowserRouter } from 'react-router'
import AppLayout from '../layouts/AppLayout'
import IndexPage from '../pages/IndexPage'
import NotFoundPage from '../pages/NotFoundPage'

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
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
