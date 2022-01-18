import { createContext, useState } from "react";

export const ContadorContext = createContext([]);

export function ContadorProvider({children}) {

  const [contador, setContador] = useState(0)

  function handleAddContador(value) {
    setContador(value + 1)
  }
  
  return (
    <ContadorContext.Provider value={{
      contador: contador,
      addContador: handleAddContador
    }}>
      {children}
    </ContadorContext.Provider>
  )
}