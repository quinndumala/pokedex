import Image from "material-ui-image";
import styles from "./styles/pokemonImage.module.css";

interface PokemonImageProps {
  imageURL: string;
}

function PokemonImage({ imageURL }: PokemonImageProps) {
  return (
    <div className={styles.pokemonImage}>
      <Image
        src={imageURL}
        alt="Pokemon image"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}

export default PokemonImage;
