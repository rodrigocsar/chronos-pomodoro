import { Timer } from "lucide-react";

import styles from "./Logo.module.css";
import { RouterLink } from "../RouterLink";

export default function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <RouterLink href="/" className={styles.logoLink}>
          <Timer />
          <span>Chronos</span>
        </RouterLink>
      </div>
    </>
  );
}
