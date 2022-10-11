import ScrollAnimation from "react-animate-on-scroll";
import styles from "./Venus.module.css";

function Page() {
  return (
    <div className={styles.Venus}>
      <ScrollAnimation
        animateIn="animate__fadeInDown"
        style={{ marginTop: "300px" }}
      >
        <h1>Project Venus</h1>
        <div>
          <h1>Work In Progress</h1>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Page;
