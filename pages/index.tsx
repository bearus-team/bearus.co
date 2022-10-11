import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Pagination,
  Navigation,
  EffectFlip,
  EffectFade,
} from "swiper";
import Main from "../subpages/Main";
import Mercury from "../subpages/Mercury";
import Venus from "../subpages/Venus";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, EffectFade]);

function Home() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0px",
          width: "100vw",
          height: "60px",
          backgroundColor: "white",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 200px 0px 200px",
        }}
      >
        <div style={{ fontSize: "24px" }}>bearus.co</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <div>메인메뉴</div>
          <div>도움말</div>
          <div>소개</div>
          <div>엄준식</div>
          <div>화이팅</div>
        </div>
      </div>
      <Swiper
        grabCursor
        effect="fade"
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        mousewheel
        direction="vertical"
        pagination
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {({ isActive }) => <Main isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Mercury isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Venus isActive={isActive} />}
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
