import { createContext, useContext, useState } from 'react';

const opcaoContext = createContext();

export function ModoContagem ({ children }) {
    // cronometro = false e temporizador = true
  const [opcaoButton, setOpcaoButton] = useState(false);
  return (
    <opcaoContext.Provider value={{ opcaoButton, setOpcaoButton }}>
      {children}
    </opcaoContext.Provider>
  );
}

export function useModo() {
  return useContext(opcaoContext);
}