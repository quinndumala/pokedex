import { GetServerSidePropsContext } from "next";
import { Pokemon, Stat } from "@/common/types";
import PokemonName from "@/components/pokemonView/PokemonName";
import { CapitalizeFirstLetter, FormatDexNumber } from "@/util/Util";
import PokemonImage from "@/components/pokemonView/PokemonImage";
import { useColor } from "color-thief-react";
import { useEffect } from "react";
import Color from "color-thief-react";
import ViewBackground from "@/components/pokemonView/ViewBackground";
import PokemonInfoCard from "@/components/pokemonView/PokemonInfoCard";
import Grid from "@mui/material/Unstable_Grid2";

interface PoekemonViewProps {
  pokemonData: Pokemon;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const res = await fetch(
  //   `https://pokeapi.co/api/v2/pokemon/${context.params?.id}`
  // );
  // const pokeData = await res.json();

  const pokeRes = fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params?.id}`
  );

  const speciesRes = fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${context.params?.id}`
  );

  const res = await Promise.all([pokeRes, speciesRes]);

  const pokeData = await res[0].json();
  const speciesData = await res[1].json();

  if (!pokeData) {
    return {
      notFound: true,
    };
  }

  const pokemonData: Pokemon = {
    id: pokeData.id,
    name: pokeData.name,
    types: pokeData.types,
    description: speciesData.flavor_text_entries.find(
      (x: any) => x.language.name === "en"
    ).flavor_text,
    stats: pokeData.stats.map((x: any) => ({
      stat: x.stat.name,
      value: x.base_stat,
    })),
    image: pokeData.sprites.other["official-artwork"]["front_default"],
  };

  return {
    props: { pokemonData },
  };
};

function PokemonView({ pokemonData }: PoekemonViewProps) {
  console.log("pokemonData: ", pokemonData);
  const {
    data,
    loading: colorThiefLoading,
    error,
  } = useColor(pokemonData.image, "hex");

  useEffect(() => {
    console.log("Color data: ", data);
  }, [data, colorThiefLoading]);

  console.log("image URL: ", pokemonData.image);

  return (
    <>
      <Color src={pokemonData.image} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
          if (loading || !data) return <div>Loading</div>;
          return (
            <ViewBackground color={data}>
              <Grid container spacing={1} sx={{ height: "100%" }}>
                <Grid
                  lg={7}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ display: "flex" }}
                >
                  {/* <PokemonName
                    name={CapitalizeFirstLetter(pokemonData.name)}
                    dexNumber={FormatDexNumber(pokemonData.id)}
                  /> */}
                  <PokemonImage imageURL={pokemonData.image} />
                </Grid>
                <Grid
                  lg={5}
                  justifyContent="left"
                  alignItems="center"
                  sx={{ display: "flex" }}
                >
                  <PokemonInfoCard pokemonData={pokemonData} />
                </Grid>
              </Grid>
            </ViewBackground>
          );
        }}
      </Color>
    </>
  );
}

export default PokemonView;
