import type React from "react";
import styles from "./Heading.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.heading}>{children}</h1>
      </div>
    </>
  );
}
