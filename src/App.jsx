import Header from "./components/Header"
import Footer from "./components/Footer"
import CharacterGrid from "./components/CharacterGrid";
import SearchForm from "./components/SearchForm";
import FavsSidebar from "./components/FavsSidebar";
import { ToastContainer, Slide } from 'react-toastify';

const App = () => {
  // console.log("Render de App");

  return (
    <>
      <div className='min-h-screen flex flex-col bg-[#B4CF66] dark:bg-[#3d348b]'>
        <ToastContainer stacked
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
        
        <Header />

        <SearchForm />
        <CharacterGrid />

        {/*  Carrito  */}
        <FavsSidebar />

        <Footer />
      </div>
    </>
  )
}

export default App
