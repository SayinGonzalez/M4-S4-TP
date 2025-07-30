//  Muestra los productos en el carrito con cantidad y total

import { useFavsContext } from "../hooks/useConsumeContexts";
import EmptyMsg from "./EmptyMsg";
import FavsCardSidebar from "./FavsCardSidebar";

const FavsSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {

  const { favs } = useFavsContext();

  // Setea el estado isModalOpen a false para poder cerrar el modal
  const handleCloseSidebar = () => setIsSidebarOpen(false)

  return (
    <>
      {
        /*  Renzeriza el Modal si isModalOpen es true  */
        isSidebarOpen && <div className="fixed inset-0 z-20 bg-black/90 flex justify-end">
          {/* CONTENEDOR SIDEBAR */}
          <div className='
            bg-[#B4CF66] dark:bg-[#3d348b]
            rounded-xl shadow-lg w-lg h-full overflow-y-auto
            grid grid-rows-[auto_1fr_auto]
          '>
            
            {/* CONTENEDOR BTN X */}
            <div className="
              w-full text-right sticky top-0 px-6 py-3 
              shadow-md shadow-current
              bg-[#44803F]
              dark:bg-[#13102F]
            ">
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
              {/* <button
								onClick={handleRemoveProductAll}
								className="text-white"
							>
								Eliminar Productos
							</button> */}
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