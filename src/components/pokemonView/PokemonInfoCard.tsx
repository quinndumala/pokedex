import { Card, CardContent, Divider, Typography } from "@mui/material";
import { Pokemon } from "@/common/types";
import PokemonName from "./PokemonName";
import { CapitalizeFirstLetter, FormatDexNumber } from "@/util/Util";
import PokemonTypesIcon from "./PokemonTypesIcon";

interface PokemonInfoCardProps {
  pokemonData: Pokemon;
}

function PokemonInfoCard({ pokemonData }: PokemonInfoCardProps) {
  return (
    <Card
      sx={{
        minWidth: "20vh",
        maxWidth: "80vh",
        minHeight: 500,
        m: 5,
        p: 2,
        borderRadius: "16px",
      }}
    >
      <CardContent>
        <div>
          <div>
            <PokemonName
              dexNumber={FormatDexNumber(pokemonData.id)}
              name={CapitalizeFirstLetter(pokemonData.name)}
            />
            <PokemonTypesIcon
              type1={pokemonData.types[0].type.name}
              type2={pokemonData.types[1]?.type.name}
            />
          </div>

          <Typography variant="body2" color="text.secondary" pt={2}>
            {pokemonData.description}
          </Typography>
        </div>
        <Divider sx={{ p: 1 }} />
      </CardContent>
    </Card>
  );
}

export default PokemonInfoCard;
