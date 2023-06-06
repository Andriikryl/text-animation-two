import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.body}></div>
    </main>
  );
}

function Text3D({ primary, secondary }) {
  return (
    <div className="styles.textContainer">
      <p>{primary}</p>
      <p>{secondary}</p>
    </div>
  );
}
