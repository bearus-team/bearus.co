import { useEffect, useRef, useState } from "react";
import Main from "../subpages/Main";
import Mercury from "../subpages/Mercury";
import Venus from "../subpages/Venus";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import styles from "./index.module.css";

function Home() {
  const [isBorderVisible, setBorderVisible] = useState(false);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleScroll = () => {
      const dom = ref.current!.getBoundingClientRect();
      const nextValue = dom.top < 0;
      if (nextValue !== isBorderVisible) {
        setBorderVisible(nextValue);
      }
    };
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBorderVisible]);
  return (
    <div className="App">
      <div
        className={`${styles.navBarFrame} border-bottom ${
          isBorderVisible ? "border-bottom-color" : ""
        }`}
      >
        <Logo fontSize="28px" />
        <div className={styles.navBarFrameMenu}>
          <div>베어어스</div>
          <div>프로젝트</div>
          <div>커뮤니티</div>
          <div>자주 묻는 질문</div>
        </div>
      </div>
      <Main />
      <Mercury refer={ref} />
      <Venus />
      <Footer />
    </div>
  );
}

export default Home;
