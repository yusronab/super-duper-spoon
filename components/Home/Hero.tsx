"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';
import { motion } from "framer-motion";
import ButtonHero from "./ButtonHero";
import styles from "./Home.module.css";

const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <div>
                <h1>Mudahnya reservasi tanpa perlu pergi mengantri</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nostrum quia temporibus eos et incidunt voluptates similique dolorem.</p>
                <ButtonHero />
            </div>
            <div className="h-full w-full">
                <Swiper
                    slidesPerView={1}
                    mousewheel={true}
                    direction={"vertical"}
                    pagination={{
                        clickable: true,
                        bulletClass:
                            'w-2 h-6 block cursor-pointer bg-slate-200',
                        bulletActiveClass: '!bg-color-primary !m-1',
                    }}
                    loop={true}
                    modules={[Pagination, Mousewheel]}
                    className="!h-full"
                >
                    {[...Array(2)].map((_, index) => (
                        <SwiperSlide key={index} className="!h-full !flex !justify-center !items-center">
                            {({ isActive }) => (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isActive ? 1 : 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <Image
                                        src={`/hero-${index + 1}.png`}
                                        alt={"/clear-girl.png"}
                                        fill
                                        className="object-contain"
                                    />
                                </motion.div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Hero;