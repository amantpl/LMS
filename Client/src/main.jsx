import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppContextProvider } from './context/AppContext.jsx';
import { BrowserRouter } from 'react-router-dom';

// Create the root element and render the React application
createRoot(document.getElementById('root')).render(
  // BrowserRouter provides routing functionality for the entire application
  <BrowserRouter>
    {/* AppContextProvider makes global state available throughout the app */}
    <AppContextProvider>
      {/* The main App component that contains all routes and UI */}
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
