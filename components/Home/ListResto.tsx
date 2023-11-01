"use client";

import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClockCircle, AiTwotonePhone } from "react-icons/ai";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import styles from "./Home.module.css";
import { BiFoodMenu } from "react-icons/bi";
import { MdLocationOn, MdOutlineTableBar } from "react-icons/md";
import CardResto from "./CardResto";
import CardLastIndex from "./CardLastIndex";

type ListProps = {
    title: string
}

const ListResto = ({ title }: ListProps) => {
    const listResto = [
        {
            "id": "65379fdf480906c5011c7138",
            "image": "https://picsum.photos/200/300.jpg",
            "menus": 29,
            "name": "Netplode",
            "phone": "+62 (975) 598-2392",
            "address": "760 Crawford Avenue, Darrtown, North Dakota, 5719",
            "avail": [
                {
                    type: 1,
                    kuota: 4,
                    price: 12000,
                },
                {
                    type: 2,
                    kuota: 4,
                    price: 84000,
                },
                {
                    type: 4,
                    kuota: 4,
                    price: 21000,
                },
                {
                    type: 6,
                    kuota: 4,
                    price: 92000,
                },
            ]
        },
        {
            "id": "65379fdf0314074157580598",
            "image": "https://picsum.photos/200/300.jpg",
            "menus": 33,
            "name": "Datagen",
            "phone": "+62 (921) 572-3452",
            "address": "233 Beverly Road, Bluetown, Florida, 8076",
            "avail": [
                {
                    type: 1,
                    kuota: 4,
                    price: 19000,
                },
                {
                    type: 2,
                    kuota: 4,
                    price: 84000,
                },
                {
                    type: 3,
                    kuota: 4,
                    price: 54000,
                },
                {
                    type: 6,
                    kuota: 4,
                    price: 29000,
                },
            ]
        },
        {
            "id": "65379fdf449823ec0c4d59ea",
            "image": "https://picsum.photos/200/300.jpg",
            "menus": 23,
            "name": "Ziore",
            "phone": "+62 (984) 569-3817",
            "address": "174 Boardwalk , Castleton, Missouri, 557",
            "avail": [
                {
                    type: 1,
                    kuota: 4,
                    price: 49000,
                },
                {
                    type: 2,
                    kuota: 4,
                    price: 63000,
                },
                {
                    type: 3,
                    kuota: 4,
                    price: 82000,
                },
            ]
        },
        {
            "id": "65379fdf2fd51ddc92aefb4c",
            "image": "https://picsum.photos/200/300.jpg",
            "menus": 18,
            "name": "Nspire",
            "phone": "+62 (978) 545-2634",
            "address": "386 Powell Street, Glendale, Minnesota, 9307",
            "avail": [
                {
                    type: 1,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 4,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 6,
                    kuota: 4,
                    price: 52000,
                },
            ]
        },
        {
            "id": "65379fdfbcd778bc57a4e7ce",
            "image": "https://picsum.photos/200/300.jpg",
            "menus": 20,
            "name": "Tersanki",
            "phone": "+62 (811) 552-2356",
            "address": "117 Colonial Road, Derwood, Utah, 5307",
            "avail": [
                {
                    type: 1,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 2,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 4,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 6,
                    kuota: 4,
                    price: 52000,
                },
            ]
        },
        {
            "id": "65379fdfa4bb4a10768ccae1",
            "image": "https://picsum.photos/200/300.jpg",
            "menus": 22,
            "name": "Genmy",
            "phone": "+62 (829) 512-3789",
            "address": "575 Herbert Street, Gloucester, Northern Mariana Islands, 1911",
            "avail": [
                {
                    type: 1,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 2,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 4,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 5,
                    kuota: 4,
                    price: 52000,
                },
            ]
        },
        {
            "id": "65379fdff39301b517be76d8",
            "image": "https://picsum.photos/200/300.jpg",
            "menus": 13,
            "name": "Xth",
            "phone": "+62 (892) 574-2020",
            "address": "877 Columbia Street, Devon, Hawaii, 4776",
            "avail": [
                {
                    type: 1,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 2,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 3,
                    kuota: 4,
                    price: 52000,
                },
            ]
        },
        {
            "id": "65379fdf89f59c0800e47612",
            "image": "https://picsum.photos/200/300.jpg",
            "menus": 24,
            "name": "Sportan",
            "phone": "+62 (926) 459-3816",
            "address": "793 Pacific Street, Biddle, Virgin Islands, 1456",
            "avail": [
                {
                    type: 1,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 2,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 4,
                    kuota: 4,
                    price: 52000,
                },
                {
                    type: 6,
                    kuota: 4,
                    price: 52000,
                },
            ]
        }
    ];

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