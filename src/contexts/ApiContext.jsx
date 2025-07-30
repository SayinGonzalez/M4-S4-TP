//  Contexto con la lógica para el uso de la API

import useApi from "../hooks/useApi";
import { ApiContext } from "../hooks/useCreateContexts";

//  2. Crear el provide
export const ApiProvider = ({ children }) => {

  console.log("⚛️ Se montó ApiProvider");
  const charactersApi = useApi();
  
  return (
    <ApiContext.Provider value={charactersApi}>
      {children}
    </ApiContext.Provider>
  )
}
//  2.1 Usar el provider en el main.jsx