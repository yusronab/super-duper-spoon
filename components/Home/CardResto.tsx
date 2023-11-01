"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineClockCircle, AiTwotonePhone } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { MdLocationOn, MdOutlineTableBar } from "react-icons/md";


const CardResto = ({ item, active, index }: { item: any, active: boolean, index: number }) => {
    const lowestPrice = item.avail.reduce((min: number, current: { price: number }) => current.price < min ? current.price : min, item.avail[0].price);

    return (
        <motion.div
            className="flex flex-col relative group"
            initial={{ y: -1000 }}
            animate={{ y: active ? 0 : -1000 }}
            transition={{ duration: 0.2 * index, type: "spring" }}
        >
            <div className="absolute top-0 right-0 text-color-ternary mt-1 mr-1 gap-2 flex opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer">
                <MdLocationOn size={24} />
                <AiTwotonePhone size={24} />
            </div>
            <Image
                src={"/clear-sandwich.png"}
                alt="Load image fail"
                width={350}
                height={350}
                className="w-full max-h-64 object-contain bg-slate-200"
            />
            <div className="w-full flex flex-col gap-1 items-start">
                <p className="text-xs lg:text-sm mt-3 text-color-ternary">
                    {item.name}
                </p>
                <p className="text-sm font-bold lg:text-base text-color-ternary">
                    Harga mulai dari {lowestPrice}
                </p>
                <p className="text-xs lg:text-sm text-gray-600 flex items-center gap-2">
                    <AiOutlineClockCircle />
                    <span>10.00 - 22.00</span>
                </p>
                <p className="text-xs lg:text-sm text-gray-600 flex items-center gap-2">
                    <BiFoodMenu />
                    <span>{item.menus}</span>
                </p>
                <p className="text-xs lg:text-sm text-gray-600 flex items-center gap-2">
                    <MdOutlineTableBar />
                    <span>{item.menus}</span>
                </p>
                <button className="bg-color-primary text-white border-none rounded-s-md rounded-tr-3xl rounded-br-md py-2 px-4 my-3">
                    Pesan sekarang
                </button>
            </div>
        </motion.div>
    );
};

export default CardResto;