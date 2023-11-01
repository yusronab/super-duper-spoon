"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CardLastIndex = ({ text, link, active }: { text: string, link: string, active: boolean }) => {
    return (
        <motion.div
            initial={{ y: -1000 }}
            animate={{ y: active ? 0 : -1000 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="group h-full flex justify-center items-center"
        >
            <Link
                href={link}
                className="text-color-secondary group-hover:text-color-ternary group-hover:underline transition-all duration-300 cursor-pointer">
                {text}
            </Link>
        </motion.div>
    );
};

export default CardLastIndex;