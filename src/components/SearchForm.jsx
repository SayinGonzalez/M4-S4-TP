//  Formulario de búsqueda

import { useState } from "react";
import { useApiContext } from "../hooks/useConsumeContexts";

const SearchForm = () => {

  const { getAllCharacters, getCharactersByParams } = useApiContext();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando personajes...");
    !query
      ? getAllCharacters()
      : getCharactersByParams(query); // Llama al hook con el nombre ingresado
  };

  const HandleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-6 h-11">
      <input
        type="text"
        value={query}
        onChange={HandleChange}
        placeholder="Buscar personajes..."
        className=" bg-slate-500 font-mono text-slate-200 text-lg px-4 rounded-l-lg border-y border-l border-slate-200"
      />
      <button type="submit" className="bg-indigo-950 text-lg px-3 rounded-r-lg border-y border-r border-slate-200">
        🔍
      </button>
    </form>
  );
}

export default SearchForm