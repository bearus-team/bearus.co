import ScrollAnimation from "react-animate-on-scroll";
import styles from "./Description.module.css";

function Page() {
  return (
    <div className={styles.Description}>
      <ScrollAnimation animateIn="animate__fadeInLeft">
        <div style={{ width: "800px" }}>
          <h1>"우리는 이제부터 연쇄검증마가 될거에요. 냅다 출시하고</h1>
          <div style={{ textAlign: "right" }}>
            <h1>사람들 반응을 보는거에요. 재밌지 않겠어요?"</h1>
          </div>
          <div style={{ textAlign: "right" }}>
            <h3>- 베어어스 성형주 -</h3>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Page;
