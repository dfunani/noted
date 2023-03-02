import Image from "next/image";
import styles from "../styles/Landing.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.text}>NOTED</div>
      <div className={styles.thirteen}>
        <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
      </div>
    </div>
  );
}
