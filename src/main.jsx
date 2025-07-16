import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initGA } from './utils/analytics';

// Initialize ReactGA
initGA();

AOS.init({ once: false });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
