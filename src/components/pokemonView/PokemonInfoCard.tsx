import { Card, CardContent, Typography } from "@mui/material";
import { Pokemon } from "@/common/types";
import PokemonName from "./PokemonName";
import { CapitalizeFirstLetter, FormatDexNumber } from "@/util/Util";

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
        borderRadius: "16px",
      }}
    >
      <CardContent>
        <PokemonName
          dexNumber={FormatDexNumber(pokemonData.id)}
          name={CapitalizeFirstLetter(pokemonData.name)}
        />
        <Typography variant="body2" color="text.secondary" pt={2}>
          {pokemonData.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PokemonInfoCard;
