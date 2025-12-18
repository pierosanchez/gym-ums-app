import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import App from './App.jsx';
import AppTheme from './shared/components/theme/AppTheme.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AppTheme>
        <App />
      </AppTheme>
    </StrictMode>
  </BrowserRouter>
  ,
)
