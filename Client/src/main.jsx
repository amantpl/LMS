import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppContextProvider } from './context/AppContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import {ClerkProvider} from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

// Create the root element and render the React application
createRoot(document.getElementById('root')).render(
  // BrowserRouter provides routing functionality for the entire application
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      {/* AppContextProvider makes global state available throughout the app */}
      <AppContextProvider>
        {/* The main App component that contains all routes and UI */}
        <App />
      </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>
);
