import { useEffect, useRef, useState } from "react";
import Main from "../subpages/Main";
import Mercury from "../subpages/Mercury";
import Venus from "../subpages/Venus";
import Description from "../subpages/Description";
import MainLayout from "../layouts/MainLayout";

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
    <MainLayout isBorderVisible={isBorderVisible}>
      <Main />
      <Description />
      <Mercury refer={ref} />
      <Venus />
    </MainLayout>
  );
}

export default Home;
