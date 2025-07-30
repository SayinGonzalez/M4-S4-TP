//  Diseño para las cards de los personajes

import AddRemoveBtn from "./AddRemoveBtn"

const CharacterCard = ({ char }) => {

  return (
    <div className='
      relative
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
      <p className="text-md text-gray-300">{char.status} - {char.species}</p>
      {/*  Locación del personaje  */}
      <p className="text-md text-gray-300 my-1">{char.location.name}</p>

      <AddRemoveBtn
        charId={char.id}
        char={char}
      />

    </div>
  )
}

export default CharacterCard