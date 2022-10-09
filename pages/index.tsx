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
                <Mercury/>
            </SwiperSlide>
            <SwiperSlide>
                <Venus/>
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default Home
