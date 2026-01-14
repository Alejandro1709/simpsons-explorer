import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SimponsExplorerApp from './SimponsExplorerApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SimponsExplorerApp />
  </StrictMode>
)
