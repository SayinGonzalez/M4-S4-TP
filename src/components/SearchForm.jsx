//  Formulario de búsqueda

import { useState } from "react";
import { useApiContext } from "../hooks/useConsumeContexts";

const SearchForm = () => {

  const { getAllCharacters, getCharactersByParams } = useApiContext();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    !query   //  Si el input está vacío 
    ? getAllCharacters()   //  Obtiene todos los personajes sino
    : getCharactersByParams(query);  // Llama al hook con el nombre ingresado
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-6 h-11">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Nombre del personaje"
        className=" bg-slate-500 font-mono text-slate-200 text-lg px-4 rounded-l-lg border-y border-l border-slate-300 w-1/3 focus:outline-none focus-visible:border-slate-100"
      />
      <button type="submit" className="bg-indigo-950 text-lg px-3 rounded-r-lg border-y border-r border-slate-300 in-focus-within:border-slate-100">
        <i className="bi bi-search text-slate-100"></i>
      </button>
    </form>
  );
}

export default SearchForm