import { useContext } from "react";
import { ApiContext, ThemeContext } from "./useCreateContexts";

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