import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.router'

function SimponsExplorerApp() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default SimponsExplorerApp
