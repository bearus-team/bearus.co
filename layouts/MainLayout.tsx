import React from "react";
import styles from "../pages/index.module.css";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
  isBorderVisible: boolean;
}

function MainLayout({ children, isBorderVisible }: Props) {
  return (
    <>
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
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
