import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'  // 1. Import Analytics

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />  {/* 2. Add Analytics here */}
  </StrictMode>,
)
