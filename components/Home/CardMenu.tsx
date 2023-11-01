import { motion } from "framer-motion";
import Image from "next/image";

const CardMenu = ({item, active, index}: {item: any, active: boolean, index: number}) => {
    return (
        <motion.div
            className="flex flex-col"
            initial={{ y: -1000 }}
            animate={{ y: active ? 0 : -1000 }}
            transition={{ duration: 0.2 * index, type: "spring" }}
        >
            <Image
                src={"/clear-noddle.png"}
                alt="Load image fail"
                width={350}
                height={350}
                className="w-full max-h-64 object-contain bg-slate-200"
            />
            <div className="w-full">
                <p className="text-sm font-bold lg:text-base mt-3 mb-1 text-color-ternary">
                    {item.name}
                </p>
                <div className="text-xs lg:text-sm text-gray-600">
                    {item.price}
                </div>
                <button className="bg-color-primary text-white border-none rounded-s-md rounded-tr-3xl rounded-br-md py-2 px-1 my-3 text-sm lg:text-base lg:px-4">
                    Pesan sekarang
                </button>
            </div>
        </motion.div>
    );
};

export default CardMenu;