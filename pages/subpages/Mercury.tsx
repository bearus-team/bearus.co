import styles from "./Main.module.css";
import PageProps from "./PageProps";

function Page({ isActive }: PageProps) {
  return (
    <div className={styles.Info}>
      <h1
        className={isActive ? styles.animation : ""}
        style={{ color: "white" }}
      >
        Project Mercury
      </h1>
    </div>
  );
}

export default Page;
