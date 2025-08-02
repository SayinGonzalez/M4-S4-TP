
import { useFavsContext } from "../hooks/useConsumeContexts"
import ThemeButton from "./ThemeButton"

const Header = () => {

  const { setIsSidebarOpen } = useFavsContext();

  const handleOpenSidebar = () => setIsSidebarOpen(true)

  return (
    <header className="
      text-white p-4 flex justify-between z-10
      sticky top-0 shadow shadow-black dark:shadow-slate-500
      bg-[#44803F] 
      dark:bg-[#13102F]
    ">

      {/*  Btn para cambiar el tema Claro/Oscuro */}
      <ThemeButton />

      {/*  Btn para abrir el sidebar de "Favoritos"  */}
      <button
        onClick={handleOpenSidebar}
        className="
          flex gap-2.5
        text-black py-2 px-4 rounded
          hover:shadow-sm transform hover:scale-105 duration-300 
          bg-[#D5B71E] hover:bg-[#E6C520] hover:shadow-[#B4CF66]
          dark:bg-[#3D1EAF] dark:hover:bg-[#3D1EAF] dark:hover:shadow-[#6457D5] dark:text-white
        "
      >
        <i className="bi bi-star md:text-lg font-medium flex gap-2 items-center justify-center"></i>
        Favoritos
      </button>

    </header>
  )
}

export default Header