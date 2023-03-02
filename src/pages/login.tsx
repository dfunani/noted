import styles from "./../styles/Landing.module.css";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.name}>
        <label htmlFor="name">Name</label>
        <input type="text" name="Name" id="name" />
      </div>
      <div className={styles.date}>
        <label htmlFor="date">Birthday</label>
        <input type="date" name="Date" id="date" />
      </div>
      <div className={styles.password}>
        <label htmlFor="password">Password</label>
        <input type="password" name="Password" id="password" />
      </div>
    </div>
  );
}
