import axios from "axios";

const URL = `https://rickandmortyapi.com/api/character`;

export const fetchAllCharacters = async (page) => {
  const response = await axios.get(`${URL}/?page=${page}`);
  return response.data;
}

// Buscar personajes por campos
export const fetchCharactersByParams = async (name, page, status, species, gender) => {
  const response = await axios.get(`${URL}`, {
    params: {
      name,
      ...(page && { page }), // agrega "page" solo si existe
      ...(status && { status }), // agrega "status" solo si existe
      ...(species && { species }), // agrega "species" solo si existe
      ...(gender && { gender }) // agrega "gender" solo si existe
    }
  });
  return response.data;
}