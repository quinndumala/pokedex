import { Typography } from "@mui/material";
import styles from "./styles/pokemonName.module.css";

interface PokeomonNameProps {
  name: string;
  dexNumber: string;
}

function PokemonName({ name, dexNumber }: PokeomonNameProps) {
  return (
    <div>
      <Typography
        className={styles.pokemonNameHeader}
        variant="h6"
        color="text.secondary"
      >
        {dexNumber}
      </Typography>
      <div>
        <Typography className={styles.pokemonNameHeader} variant="h4">
          {name}
        </Typography>
      </div>
    </div>
  );
}

export default PokemonName;
