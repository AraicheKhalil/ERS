import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
//   const [gen, setGen] = useState(true);
  // Add as many states as you need

  return (
    <AppContext.Provider value={{ open, setOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppProvider;
