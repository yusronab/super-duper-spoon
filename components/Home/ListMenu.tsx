"use client";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import styles from "./Home.module.css";
import CardLastIndex from "./CardLastIndex";
import CardMenu from "./CardMenu";

type ListProps = {
    title: string
}

const ListMenu = ({ title }: ListProps) => {
    const listMenu = [
        {
            id: "65379ec6360cdffc6cc9a571",
            price: "$1,812.85",
            name: "Fulton Vega",
            companyId: "65379ec6d517d647f4ea690a"
        },
        {
            id: "65379ec6216a77ef0cdb2d64",
            price: "$1,246.32",
            name: "Irwin White",
            companyId: "65379ec62960d9abfb8e074d"
        },
        {
            id: "65379ec6aeeb4c575fbf9724",
            price: "$3,879.42",
            name: "Caldwell Blake",
            companyId: "65379ec6f81c85f11f6bff82"
        },
        {
            id: "65379ec6be5ec5646d807f93",
            price: "$2,346.15",
            name: "Norman Logan",
            companyId: "65379ec619a283c31d263daf"
        },
        {
            id: "65379ec60a85793b016199ef",
            price: "$3,220.82",
            name: "Abbott Mays",
            companyId: "65379ec651da49e3109d55e8"
        },
        {
            id: "65379ec6392d73729a0aaa4f",
            price: "$2,096.56",
            name: "Alissa Reynolds",
            companyId: "65379ec638460b46da2b61e0"
        },
        {
            id: "65379ec61d8ea0a8657a3085",
            price: "$1,959.89",
            name: "Holder Tanner",
            companyId: "65379ec6cfbedc2f99e5a735"
        },
        {
            id: "65379ec6e81952883b23e00b",
            price: "$2,214.36",
            name: "Ferguson Armstrong",
            companyId: "65379ec6393344b81913619c"
        },
        {
            id: "65379ec68f4314bd7ca127b0",
            price: "$2,654.52",
            name: "Mcintosh Dale",
            companyId: "65379ec6804652f84452d4e4"
        }
    ];

    return (
        <div className="my-10">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl text-color-ternary">
                    {title}
                </h1>
                <div className="flex gap-5">
                    <div className="menu-swiper-button-prev z-10">
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
                    <div className="menu-swiper-button-next z-10">
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
                        nextEl: '.menu-swiper-button-next',
                        prevEl: '.menu-swiper-button-prev',
                    }}
                    slidesPerView={4}
                    spaceBetween={50}
                    modules={[Navigation, Pagination]}
                    className="!py-5"
                    watchSlidesProgress
                >
                    {listMenu.map((item, index) => (
                        <div key={index}>
                            <SwiperSlide className="!h-auto">
                                {({ isVisible }) => (
                                    <CardMenu item={item} active={isVisible} index={index} />
                                )}
                            </SwiperSlide>
                            {index + 1 === listMenu.length && <SwiperSlide className="!h-auto">
                                {({ isVisible }) => (
                                    <CardLastIndex link="/menu" text="Lihat semua" active={isVisible} />
                                )}
                            </SwiperSlide>}
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ListMenu;