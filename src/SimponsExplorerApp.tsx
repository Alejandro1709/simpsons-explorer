import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FavoriteSimpsonProvider } from './context/FavoriteSimpsonContext'

const queryClient = new QueryClient()

function SimponsExplorerApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteSimpsonProvider>
        <RouterProvider router={appRouter} />

        <ReactQueryDevtools initialIsOpen={false} />
      </FavoriteSimpsonProvider>
    </QueryClientProvider>
  )
}

export default SimponsExplorerApp
