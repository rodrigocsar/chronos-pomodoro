import { Timer } from "lucide-react";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <a href="#" className={styles.logoLink}>
          <Timer />
          <span>Chronos</span>
        </a>
      </div>
    </>
  );
}
