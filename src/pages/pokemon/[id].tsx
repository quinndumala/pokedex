import { GetServerSidePropsContext } from "next";
import { Pokemon } from "@/common/types";
import PokemonName from "@/components/PokemonName";
import { CapitalizeFirstLetter, FormatDexNumber } from "@/util/Util";

interface PoekemonViewProps {
  pokemonData: Pokemon;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params?.id}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const pokemonData: Pokemon = {
    id: data.id,
    name: data.name,
    types: data.types,
    image: data.sprites.other["official-artwork"]["front_default"],
  };

  return {
    props: { pokemonData },
  };
};

function PokemonView({ pokemonData }: PoekemonViewProps) {
  console.log("pokemonData: ", pokemonData);
  return (
    <>
      <PokemonName
        name={CapitalizeFirstLetter(pokemonData.name)}
        dexNumber={FormatDexNumber(pokemonData.id)}
      />
    </>
  );
}

export default PokemonView;
