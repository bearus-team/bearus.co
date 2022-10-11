import ScrollAnimation from "react-animate-on-scroll";
import styles from "./Main.module.css";
import "animate.css/animate.min.css";

function Page() {
  return (
    <div className={styles.Info}>
      <div className={styles.Main} />
      <div className={styles.Content}>
        <ScrollAnimation
          animateIn="animate__fadeInDown"
          style={{ marginTop: "300px" }}
        >
          <div>빠른 행동과 실험을 통해</div>
          <div>세상을 바꾸는 스타트업</div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Page;
