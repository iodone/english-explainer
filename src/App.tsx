import { Outlet, useLocation } from 'react-router-dom'
import Scanline from './components/Scanline'
import StatusBar from './components/StatusBar'

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className={`canvas-grid min-h-screen flex flex-col ${isHome ? 'scanline' : ''}`}>
      {/* Top status bar */}
      <StatusBar />

      {/* Main content area */}
      <main className={`flex-1 ${isHome ? '' : 'flex'}`}>
        <Outlet />
      </main>

      {/* Scanline overlay */}
      <Scanline />
    </div>
  )
}