import { Stat } from "@/common/types";
import { Grid, Typography, LinearProgress } from "@mui/material";

function PokemonStatBar({ stat, value }: Stat) {
  function getStatPercentage(value: number) {
    return Math.round((value / 255) * 100);
  }

  function getStatName(stat: string) {
    switch (stat) {
      case "hp":
        return "HP";
      case "attack":
        return "Attack";
      case "defense":
        return "Defense";
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
        return "Sp. Def";
      case "speed":
        return "Speed";
    }
  }

  return (
    <div>
      <Grid container>
        <Grid
          lg={2}
          justifyContent="right"
          alignItems="center"
          sx={{ display: "flex" }}
        >
          <Typography>{getStatName(stat)}:</Typography>
        </Grid>
        <Grid
          lg={1}
          justifyContent="center"
          alignItems="center"
          sx={{ display: "flex" }}
        >
          <Typography>{value}</Typography>
        </Grid>
        <Grid lg={9} sx={{ pt: "4px" }}>
          <LinearProgress
            color="inherit"
            variant="determinate"
            value={getStatPercentage(value)}
            sx={{ height: "15px", borderRadius: 5 }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default PokemonStatBar;
