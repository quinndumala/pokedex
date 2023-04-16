import Image from "next/image";
import styles from "./styles/pokemonType.module.css";

interface pokemonTypesIconProps {
  type1: string;
  type2: string;
}

function PokemonTypesIcon({ type1, type2 }: pokemonTypesIconProps) {
  function getTypeIcon(type: string) {
    if (type) return `/images/types/${type}.svg`;
  }

  const icon1 = getTypeIcon(type1);
  const icon2 = getTypeIcon(type2);

  console.log("icon2: ", icon2);

  console.log("icon1: ", icon1);

  return (
    <div>
      {icon1 && (
        <Image
          src={icon1}
          alt="Pokemon type 1"
          width={40}
          height={40}
          priority
        />
      )}
      {icon2 && (
        <span className={styles.iconType}>
          <Image
            src={icon2}
            alt="Pokemon type 2"
            width={40}
            height={40}
            priority
          />
        </span>
      )}
    </div>
  );
}

export default PokemonTypesIcon;
