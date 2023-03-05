import { Pokemon } from "@/common/types";
import ListCardItem from "@/components/ListCardItem";
import { GetServerSidePropsContext } from "next";

interface PokemonListProps {
  pokemon: Pokemon[];
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  let promises = [];
  for (let i = 1; i <= 20; i++) {
    promises.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((result) =>
        result.json()
      )
    );
  }

  const results: Response[] = await Promise.all(promises);
  const pokemonList: Pokemon[] = results.map((result: Response) => {
    const mon = result as any;
    return {
      id: mon.id,
      name: mon.name,
      types: mon.types,
      image: mon.sprites.other["official-artwork"]["front_default"],
    };
  });

  return { props: { pokemon: pokemonList } };
};

function PokemonList({ pokemon }: PokemonListProps) {
  console.log("pokemon list length: ", pokemon.length);
  return (
    <>
      <h1>List of Pokemon</h1>
      {pokemon.map((x) => (
        <ListCardItem key={x.id} name={x.name} image={x.image} />
      ))}
    </>
  );
}

export default PokemonList;
