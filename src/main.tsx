import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import AppProvider from './context/AppProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path='/*' element={
                    <AppProvider>
                        <App />
                    </AppProvider>
                } />
            </Routes>
        </Router>
    </StrictMode>,
)
