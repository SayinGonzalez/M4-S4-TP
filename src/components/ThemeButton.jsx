//  Botón para alternar el tema claro/oscuro

import { useThemeContext } from "../hooks/useConsumeContexts";

const ThemeButton = () => {

  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="
        py-2 px-4 rounded-xl font-bold
        hover:shadow-sm transform hover:scale-105 duration-300 
        bg-[#3D1EAF] hover:bg-[#3D1EAF] hover:shadow-[#6457D5] text-white 
        dark:bg-[#D5B71E] dark:hover:bg-[#E6C520] dark:hover:shadow-[#B4CF66] dark:text-black
      "
    >
      {
        theme === 'dark'
          ? <i className="bi bi-sun"></i>
          : <i className="bi bi-moon-stars"></i>
      }
    </button>
  )
}

export default ThemeButton