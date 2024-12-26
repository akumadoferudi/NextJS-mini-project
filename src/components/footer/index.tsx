import styles from "./styles.module.css";
import clsx from "clsx";

export default function Footer() {
  return (
    <div
      className={clsx(
        `${styles.footer} text-xl fontr-bold underline fixed bottom-0 left-0 right-0`
      )}
    >
      <p>By: Achmad Ferdiansyah - SanberCode NextJS Batch-62</p>
    </div>
  );
}
