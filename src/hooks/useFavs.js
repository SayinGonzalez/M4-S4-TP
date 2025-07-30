import { useEffect, useState } from "react";

export default function useFavs() {

  /* ────────────────────────────────────────────────────────────────────────────── */

  /*   Manejo de Estado y LocalStorage   */

  // Estado para la lista de peliculas guardadas
  const [favs, setFavs] = useState(() => {
    return JSON.parse(localStorage.getItem("favs")) || [];
  });

  // Guardar en localStorage cuando favs cambie
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);


  /* ────────────────────────────────────────────────────────────────────────────── */

  /*   Funciones para Favs  */

  // Añadir nuevo personaje a favs
  const addToFavs = (char) => {
    setFavs([...favs, char]);
  };

  // Remover un personaje de favs
  const removeFromFavs = (charId) => {
    setFavs((prevFavs) => prevFavs.filter((char) => char.id !== charId));
  };

  /* // Remover todo lo de favs
    const RemoveAllFavs = () => {
      setFavs([])
    } */

  // Verifica si el personaje se encuentra en la lista
  const isInFavs = (charId) =>
    favs.some((char) => char.id === charId);

  /* ────────────────────────────────────────────────────────────────────────────── */

  return {
    favs,
    addToFavs,
    removeFromFavs,
    isInFavs
  };
}

