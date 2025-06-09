import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { HeroFirstSlide, HeroSecondSlide, HeroThirdSlide } from "./Slides";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <main className="relative w-full md:min-h-[500px] h-[60vh] lg:h-[90vh] flex flex-col justify-between px-4 lg:px-12 py-8">
                <video
                    className="absolute bottom-0 left-0 w-full h-full object-cover -z-10 -scale-x-100"
                    src="/assets/video/hero_bg.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    // autoplay={false}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                >
                    <SwiperSlide>
                        <HeroFirstSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeroSecondSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeroThirdSlide />
                    </SwiperSlide>
                </Swiper>
            </main>

            <div className="w-screen bg-cyan-400 text-[#5e17eb] font-bold tracking-wider text-center font-[AgrandirWide] py-4 px-4 text-sm sm:text-lg lg:text-2xl">
                <motion.h2
                    initial={{ x: 20, filter: "blur(10px)" }}
                    whileInView={{ x: 0, filter: "blur(0px)" }}
                    transition={{ ease: "easeIn", duration: 0.4 }}
                >
                    16+ YEAR JOURNEY • 500+ EXPERIENCES DELIVERED • OVER 60
                    BRANDS
                </motion.h2>
            </div>
        </div>
    );
};

export default HeroSection;
