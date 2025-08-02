//  Sidebar - Muestra los personajes

import { useFavsContext } from "../hooks/useConsumeContexts";
import EmptyMsg from "./EmptyMsg";
import FavsCardSidebar from "./FavsCardSidebar";

const FavsSidebar = () => {

  const { favs, isSidebarOpen, setIsSidebarOpen, RemoveAllFavs } = useFavsContext();

  // Setea el estado isSidebarOpen a false para poder cerrar el modal
  const handleCloseSidebar = () => setIsSidebarOpen(false)

  // Elimina todos los personajes de Favoritos
  const handleRemoveAll = () => {
    RemoveAllFavs();
    document.activeElement.blur(); // 👈 Quita el foco después del click
  }

  return (
    <>
      {
        /*  Renzeriza el Modal si isSidebarOpen es true  */
        isSidebarOpen && <div className="fixed inset-0 z-20 bg-black/90 flex justify-end">
          {/* CONTENEDOR SIDEBAR */}
          <div className='
            bg-[#B4CF66] dark:bg-[#3d348b]
            rounded-xl shadow-lg w-lg h-full overflow-y-auto
            grid grid-rows-[auto_1fr_auto]
          '>

            {/* CONTENEDOR BTN X */}
            <div className="
              flex justify-between
              w-full sticky top-0 px-6 py-3 
              shadow-md shadow-current
              bg-[#44803F]
              dark:bg-[#13102F]
            ">
              {/*  Btn para eliminar todos  */}
              <div className="
                w-fit h-fit rounded-2xl
                border-x-4 border-b-4 
                border-gray-300 dark:border-gray-700
                focus-within:border-t-4
              ">
                <button
                  onClick={handleRemoveAll}
                  className="
                    w-full h-full px-2 py-1 rounded-xl text-sm
                    text-gray-200 hover:text-gray-100 bg-red-600
                    border-b-4 border-red-800
                    hover:brightness-105
                    focus:border-none focus:brightness-95
                  "
                >
                  <i className="bi bi-trash3"></i> Quitar lista
                </button>
              </div>

              {/*  Btn para cerrar el modal  */}
              <button
                onClick={handleCloseSidebar}
                className="
                text-gray-300 hover:text-gray-200
                dark:text-gray-400 dark:hover:text-gray-300
                transform hover:scale-110 duration-300"
              >
                <i className="bi bi-x-square text-2xl"></i>
              </button>
            </div>

            { /*  Si la lista no está vacía se renderizan los personajes sino se muestra un msj  */
              favs.length > 0 ? (
                <ul className="m-6">
                  {favs.map((char) => (
                    <FavsCardSidebar
                      key={char.id}
                      char={char}
                    />
                  ))}
                </ul>
              ) : ( /*  Msj de lista vacía  */
                <EmptyMsg />
              )
            }
          </div>
        </div>
      }
    </>
  )
}

export default FavsSidebar