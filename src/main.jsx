import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './hooks/HooksApp.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>
<HooksApp/>
</StrictMode>,
)
