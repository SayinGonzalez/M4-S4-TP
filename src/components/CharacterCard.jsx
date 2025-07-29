//  Diseño para las cards de los personajes

const CharacterCard = ({char}) => {

  return (
    <div className='
      bg-[#44803F] dark:bg-indigo-950 
      w-full p-4 xl:p-5 rounded-xl shadow-md text-center
      flex flex-col justify-between
    '>

      {/*  Imágen del personaje  */}
      <div className="
        w-full h-fit overflow-hidden rounded-xl 
        shadow shadow-current dark:shadow-white/50
      ">
        <img
          src={char.image} 
          alt={char.name}
          className="w-full h-full object-cover" />
      </div>

      {/*  Nombre del personaje  */}
      <h2 className="text-lg lg:text-xl font-bold text-white my-3 lg:my-4">{char.name}</h2>
      {/*  Estado y Especie del personaje  */}
      <p className="text-md text-gray-300 my-1">{char.status} - {char.species}</p>
      {/*  Locación del personaje  */}
      <p className="text-md text-gray-300 my-1">{char.location.name}</p>
    </div>
  )
}

export default CharacterCard

// <div>
//   {/*  Btn para ver el modal de "Carrito"  */}
//   <button
//     onClick={getAllCharacters}
//     className="
//     text-black py-2 px-4 rounded
//       hover:shadow-sm transform hover:scale-105 duration-300 
//       bg-[#D5B71E] hover:bg-[#E6C520] hover:shadow-[#B4CF66]
//       dark:bg-[#3D1EAF] dark:hover:bg-[#3D1EAF] dark:hover:shadow-[#6457D5] dark:text-white
//     "
//   >
//     <i className="bi bi-cart2 md:text-lg font-medium flex gap-2 items-center justify-center"></i>
//   </button>

//   <div className="bg-blue-950 h-min-screen text-white">
//     {characters && characters.map(ch =>
//       <div key={ch.id}>{ch.id} - {ch.name}</div>
//     )}
//     {/* <pre>{JSON.stringify(characters, null, 2)}</pre> */}
//   </div>
// </div>


//   {/*  Btn para añadir  */}
//   <button
//     onClick={() => addToCart(product)}
//     className="
//       bg-[#D5B71E] hover:bg-[#E6C520]
//       dark:bg-lime-700 dark:hover:bg-lime-600 dark:text-white 
//       font-medium mt-2 mx-auto h-fit px-5 py-1.5 rounded
//     "
//   >
//     <i className="bi bi-cart-plus md:text-lg flex gap-2 items-center justify-center">Carrito</i>
//   </button>