// Funcionalidad de añadir y remover de Favs

import { useFavsContext } from "../hooks/useConsumeContexts";
import { toast } from "react-toastify";

const AddRemoveBtn = ({ charId, char }) => {

  const { addToFavs, isInFavs, removeFromFavs } = useFavsContext();

  const removeChar = () => {
    console.log("toast");
    removeFromFavs(charId) && toast.success('Eliminado de favoritos!');
  }

  const addChar = () => {
    addToFavs(char) && toast.success('Agregado a favoritos!');
  }

  return (
    <>
      {isInFavs(charId) ? (
        /*  Btn para remover  */
        <button
          onClick={removeChar}
          className="
            absolute right-7 bg-black/60
          text-white hover:text-amber-400
            font-medium mt-2 mx-auto h-fit p-1.5 rounded-full
          "
        >
          <i className="bi bi-star-fill md:text-[22px] flex gap-2 items-center justify-center"></i>
        </button>
      ) : (
        /*  Btn para añadir  */
        <button
          onClick={addChar}
          className="
            absolute right-7 bg-black/60
          text-white hover:text-amber-400
            font-medium mt-2 mx-auto h-fit p-1.5 rounded-full
          "
        >
          <i className="bi bi-star md:text-[22px] flex gap-2 items-center justify-center"></i>
        </button>
      )}
    </>
  )
}


export default AddRemoveBtn