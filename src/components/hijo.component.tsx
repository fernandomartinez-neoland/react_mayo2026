import { useEffect, useState } from "react";
import axios from "axios";

export default function Hijo() {
const [pokeImg, setPokeImg]=useState('')


  useEffect(() => {
    const pokeApi = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/ditto",
      );
      return response;
    };
    pokeApi()
      .then((response) => {
        setPokeImg(response.data.sprites.other['official-artwork'].front_default)
        console.log("respuesta: ", response.data.sprites.other['official-artwork'].front_default);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Hijo</h1>

      <img src={pokeImg} alt="" />
    </>
  );
}
