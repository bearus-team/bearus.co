import styles from "./Main.module.css";
import PageProps from "./PageProps";

function Page({ isActive }: PageProps) {
  return (
    <div className={styles.Info}>
      <div
        style={{
          color: "black",
          fontSize: "48px",
        }}
      >
        <div className={isActive ? styles.animation : ""}>
          빠른 행동과 실험을 통해
        </div>
        <div className={isActive ? styles.animationDelay : ""}>
          세상을 바꾸는 스타트업
        </div>
      </div>
    </div>
  );
}

export default Page;
