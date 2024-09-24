import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2/";

// Fetch list of Pokemon
export const getPokemonList = async (offset: number, limit: number) => {
  const response = await axios.get(
    `${API_BASE_URL}pokemon?offset=${offset}&limit=${limit}`
  );

  return response.data;
};

// Fetch details of a specific Pokemon
export const getPokemonDetails = async (name: string) => {
  const response = await axios.get(`${API_BASE_URL}pokemon/${name}`);
  
  return response.data;
};
