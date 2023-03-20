import { Typography } from "@mui/material";
import styles from "./styles/components.module.css";

interface PokeomonNameProps {
  name: string;
  dexNumber: string;
}

function PokemonName({ name, dexNumber }: PokeomonNameProps) {
  return (
    <>
      <Typography className={styles.pokemonNameHeader} variant="h5">
        {dexNumber}
      </Typography>
      <Typography className={styles.pokemonNameHeader} variant="h4">
        {name}
      </Typography>
    </>
  );
}

export default PokemonName;
