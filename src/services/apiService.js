import axios from "axios";

const URL = `https://rickandmortyapi.com/api/character`;

export const fetchAllCharacters = async (page) => {
  const response = await axios.get(`${URL}/?page=${page}`);
  return response.data;
}

// Buscar personajes por nombre
export async function fetchCharactersByParams(name, page) {
  const response = await axios.get(`${URL}`, {
      params: {
        name,
        ...(page && { page }), // agrega "page" solo si existe
      }
    });
  return response.data;
}