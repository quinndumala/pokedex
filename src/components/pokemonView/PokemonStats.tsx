import { Stat } from "@/common/types";
import { Box, Typography } from "@mui/material";
import PokemonStatBar from "./PokemonStatBar";

interface pokemonStatsProps {
  stats: Stat[];
}

function PokemonStats({ stats }: pokemonStatsProps) {
  return (
    <Box>
      <Typography variant="h6" sx={{ pt: 2 }}>
        Base Stats
      </Typography>
      {stats.map((x) => {
        return <PokemonStatBar key={x.stat} stat={x.stat} value={x.value} />;
      })}
    </Box>
  );
}

export default PokemonStats;
