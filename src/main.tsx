import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/design-tokens.css'
import App from './App'
import ThingPage from './pages/ThingPage'
import HomePage from './pages/HomePage'

const pages = {
  WordsPage: lazy(() => import('./pages/WordsPage')),
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/thing/:slug" element={<ThingPage />} />
          <Route
            path="/words"
            element={
              <Suspense
                fallback={
                  <div className="flex flex-1 items-center justify-center">
                    <div className="text-center">
                      <p className="thing-title text-2xl text-ink">LOADING WORDS…</p>
                      <p className="micro-label mt-3">
                        PREPARING THE VOCABULARY INDEX
                      </p>
                    </div>
                  </div>
                }
              >
                <pages.WordsPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
