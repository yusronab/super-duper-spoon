"use client";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "./Home.module.css";
import CardResto from "./CardResto";
import CardLastIndex from "./CardLastIndex";
import { listResto } from "@/constants";

type ListProps = {
    title: string
}

const ListResto = ({ title }: ListProps) => {
    return (
        <div className="my-10">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl text-color-ternary">
                    {title}
                </h1>
                <div className="flex gap-5">
                    <div className="produk-swiper-button-prev z-10">
                        <button className={styles.buttonListWrapper}>
                            <div>
                                <span>
                                    <AiOutlineArrowLeft size={24} />
                                </span>
                                <span>
                                    <AiOutlineArrowLeft size={24} />
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className="produk-swiper-button-next z-10">
                        <button className={styles.buttonListWrapper}>
                            <div>
                                <span>
                                    <AiOutlineArrowRight size={24} />
                                </span>
                                <span>
                                    <AiOutlineArrowRight size={24} />
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Swiper
                    navigation={{
                        nextEl: '.produk-swiper-button-next',
                        prevEl: '.produk-swiper-button-prev',
                    }}
                    slidesPerView={4}
                    spaceBetween={50}
                    modules={[Navigation, Pagination]}
                    className="!py-5"
                    watchSlidesProgress
                >
                    {listResto.map((item, index) => (
                        <div key={index}>
                            <SwiperSlide>
                                {({ isVisible }) => (
                                    <CardResto item={item} active={isVisible} index={index} />
                                )}
                            </SwiperSlide>
                            {index + 1 === listResto.length && <SwiperSlide className="!h-auto">
                                {({ isVisible }) => (
                                    <CardLastIndex link="/resto" text="Lihat semua" active={isVisible} />
                                )}
                            </SwiperSlide>}
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ListResto;