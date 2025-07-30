import { toast } from "react-toastify";
import { useApiContext } from "../hooks/useConsumeContexts";
import CharacterCard from "./CharacterCard";

const CharacterGrid = () => {

  const { characters, loading, error } = useApiContext();

  // console.log(`personajes APP:`, characters);
  loading && toast('Buscando personajes!')
  error && toast.error('Error al obtener los Personajes!')

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-6">
        {characters && characters.map((char) =>
          <CharacterCard
            key={char.id}
            char={char}
          />)}
      </div>
    </>
  );
}

export default CharacterGrid

// (
//   <div key={char.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center p-4">
//     <img src={char.image} alt={char.name} className="w-full rounded-lg" />
//     <h2 className="text-lg font-semibold mt-2">{char.name}</h2>
//     <p className="text-sm">{char.status} - {char.species}</p>
//     <p className="text-xs text-gray-400 mt-1">{char.location.name}</p>
//   </div>
// )