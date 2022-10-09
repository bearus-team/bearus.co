import type { NextPage } from 'next'

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
    Keyboard,
    Mousewheel,
    Pagination,
    Navigation,
} from 'swiper'
import Main from "./subpages/Main";
import Mercury from "./subpages/Mercury";
import Venus from "./subpages/Venus";



SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard])


const Home: NextPage = () => {
  return (
    <>
        <div style={{position: 'absolute', top: '0px', width: '100vw', height: '60px', backgroundColor: 'white', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            This is top bar
        </div>
        <Swiper
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            mousewheel={true}
            direction={"vertical"}
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Main/>
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <Mercury isActive={isActive}/>
                )}
            </SwiperSlide>
            <SwiperSlide>
                <Venus/>
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default Home
