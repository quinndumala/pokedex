import { Typography } from "@mui/material";
import styles from "./styles/pokemonName.module.css";

interface PokeomonNameProps {
  name: string;
  dexNumber: string;
}

function PokemonName({ name, dexNumber }: PokeomonNameProps) {
  return (
    <>
      <Typography
        className={styles.pokemonNameHeader}
        variant="h6"
        color="text.secondary"
      >
        {dexNumber}
      </Typography>
      <Typography className={styles.pokemonNameHeader} variant="h4">
        {name}
      </Typography>
    </>
  );
}

export default PokemonName;
