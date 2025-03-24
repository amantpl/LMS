import { createContext } from "react";

// Creating a new context named AppContext
export const AppContext = createContext(); 

// Creating a provider component that will wrap the entire application 
// and provide the global state to all child components
export const AppContextProvider = (props) => {
  
  // Defining the global state (can store values, functions, etc.)
  const value = {}; 

  return (
    // Providing the context value to all child components
    <AppContext.Provider value={value}>
      {props.children} {/* This renders all child components inside the provider */}
    </AppContext.Provider>
  );
};
