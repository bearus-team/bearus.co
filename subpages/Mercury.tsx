import ScrollAnimation from "react-animate-on-scroll";
import { LegacyRef } from "react";
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  EffectCards,
} from "swiper";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Mercury.module.css";

interface Props {
  refer: any;
}

SwiperCore.use([
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectFade,
  EffectCards,
]);

function Page({ refer }: Props) {
  return (
    <div
      className={styles.Mercury}
      ref={refer}
      style={{ flexDirection: "column", justifyContent: "center" }}
    >
      <div className={styles.flexRowCenter}>
        <img
          style={{ height: "auto", width: "30%" }}
          src="/mc_1.jpg"
          width="600"
          height="600"
        />
        <div className={styles.gridBoxElement}>
          <ScrollAnimation animateIn="animate__fadeInDown">
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "24px" }}>Codename Mercury</div>
              <div style={{ fontSize: "48px" }}>Receipt Printer</div>
              <div className={styles.gridBoxElementFont}>
                자세히보기
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className={styles.flexRowCenter}>
        <div className={styles.gridBoxElement}>
          <ScrollAnimation animateIn="animate__fadeInUp">
            <div style={{ textAlign: "center", fontSize: "24px" }}>
              <div>영수증 프린터를 개발하여</div>
              <div>한림대학교 대동제 부스로</div>
              <div>운영하였습니다</div>
              <div>(2022/09~)</div>
            </div>
          </ScrollAnimation>
        </div>
        <img
          style={{ height: "auto", width: "30%" }}
          src="/mc_3.jpg"
          width="600"
          height="600"
        />
      </div>
    </div>
  );
}

export default Page;
