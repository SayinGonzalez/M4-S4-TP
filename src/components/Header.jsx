import ThemeButton from "./ThemeButton"

const Header = () => {

  return (
    <header className="
      text-white p-4 flex justify-between
      sticky top-0 shadow shadow-black dark:shadow-slate-500
      bg-[#44803F] 
      dark:bg-[#13102F]
    ">

      {/*  Btn para cambiar el tema Claro/Oscuro */}
      <ThemeButton />

    </header>
  )
}

export default Header