//  Maneja el estado global del carrito

import { FavsContext } from "../hooks/useCreateContexts";
import useFavs from "../hooks/useFavs";

//  2. Crear el provider
export const FavsProvider = ({ children }) => {
  
  // Crea instancia del custom hook useFavs
  const favs = useFavs();

  return (
    <FavsContext.Provider value={favs}>
      {children}
    </FavsContext.Provider>
  )
}
//  2.1 Usar el provider en el main.jsx

