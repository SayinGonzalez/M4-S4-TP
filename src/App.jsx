import Header from "./components/Header"
import Footer from "./components/Footer"
import CharacterGrid from "./components/CharacterGrid";
import SearchForm from "./components/SearchForm";
import { useState } from "react";
import FavsSidebar from "./components/FavsSidebar";

const App = () => {
  // console.log("Render de App");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='min-h-screen bg-[#B4CF66] dark:bg-[#3d348b]'>
      <Header setIsSidebarOpen={setIsSidebarOpen} />

      <SearchForm />
      <CharacterGrid />

      {/*  Carrito  */}
      <FavsSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Footer />
    </div>
  )
}

export default App
