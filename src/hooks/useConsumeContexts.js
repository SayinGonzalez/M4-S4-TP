//  Hook con el consumo de cada contexto

import { useContext } from "react";
import { ApiContext, FavsContext, ThemeContext } from "./useCreateContexts";

//  3. Consumir el contexto (useContext)

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   Theme Button   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const useThemeContext = () => {
  return useContext(ThemeContext);
}
/* ────────────────────────────────────────────────────────────────────────────── */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   Rick and Morty   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const useApiContext = () => {
  // console.log("⚛️ Se montó useApiContext");
  return useContext(ApiContext);
}
/* ────────────────────────────────────────────────────────────────────────────── */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   Favoritos   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const useFavsContext = () => {
  return useContext(FavsContext)
}
/* ────────────────────────────────────────────────────────────────────────────── */