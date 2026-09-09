import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/design-tokens.css'
import App from './App'
import ThingPage from './pages/ThingPage'
import HomePage from './pages/HomePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/thing/:slug" element={<ThingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)