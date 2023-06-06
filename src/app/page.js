import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.body}>
        <Text3D primary={"Atlason"} secondary={"Philosophy"} />
        <Text3D primary={"Tudio"} secondary={"Team"} />
        <Text3D primary={"Furniture"} secondary={"Beautiful"} />
        <Text3D primary={"Products"} secondary={"Useful"} />
      </div>
    </main>
  );
}

function Text3D({ primary, secondary }) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.primary}>{primary}</p>
      <p className={styles.secondary}>{secondary}</p>
    </div>
  );
}
