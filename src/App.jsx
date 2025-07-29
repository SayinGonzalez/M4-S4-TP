import Header from "./components/Header"
import Footer from "./components/Footer"
import CharacterGrid from "./components/CharacterGrid";
import SearchForm from "./components/SearchForm";

function App() {
  console.log("Render de App");

  return (
    <div className='min-h-screen bg-[#B4CF66] dark:bg-[#3d348b]'>
      <Header />
      <SearchForm />
      <CharacterGrid/>
      <Footer />
    </div>
  )
}

export default App
