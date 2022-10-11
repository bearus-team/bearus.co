import ScrollAnimation from "react-animate-on-scroll";
import styles from "./Venus.module.css";

function Page() {
  return (
    <div className={styles.Venus}>
      <ScrollAnimation
        animateIn="animate__fadeInDown"
        style={{ marginTop: "300px", textAlign: "center" }}
      >
        <h1>Codename Venus</h1>
        <div>
          <h1>Work In Progress (2022/10~)</h1>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Page;
