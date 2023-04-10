import { ReactNode } from "react";
import styles from "./styles/viewBackground.module.css";

interface ViewBackgroundProps {
  color: string;
  children: ReactNode;
}

function ViewBackground({ color, children }: ViewBackgroundProps) {
  return (
    <div className={styles.viewBackground} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}

export default ViewBackground;
