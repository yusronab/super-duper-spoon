"use client";

import { useDetails } from "@/hooks/useDetails";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";

const CardMenu = ({ item, index }: { item: any, index: number }) => {
    const { detailData, setDetailData } = useDetails();

    const handleClicked = () => {
        const existingItem = detailData.find((data) => data.id === item.id);

        if (existingItem) {
            existingItem.qty += 1;
        } else {
            const newItem = { ...item, qty: 1 };
            setDetailData([...detailData, newItem]);
        }
    };

    return (
        <motion.div
            className="flex flex-col group cursor-pointer"
            whileHover={{ y: 10 }}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 * index, type: "spring" }}
        >
            <Image
                src={"/clear-noddle.png"}
                alt="Load image fail"
                width={350}
                height={350}
                className="w-full max-h-64 object-contain bg-slate-200"
            />
            <div className="w-full relative group-hover:border-b group-hover:border-b-color-ternary rounded-md pb-2">
                <p className="text-sm font-bold lg:text-base mt-3 mb-1 text-color-ternary">
                    {item.name}
                </p>
                <div className="text-xs lg:text-sm text-gray-600">
                    {item.price}
                </div>
                <button
                    onClick={handleClicked}
                    className="bg-color-primary text-white border-none rounded-full p-3 absolute right-0 mr-2 top-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300"
                >
                    <BiPlus />
                </button>
            </div>
        </motion.div>
    );
};

export default CardMenu;