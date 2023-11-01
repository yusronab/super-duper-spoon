"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
    MdFastfood,
    MdFoodBank,
    MdOutlineHome,
    MdOutlineShoppingCart,
} from "react-icons/md";

let tabs = [
    { id: "world", route: "/", label: "Home", icon: <MdOutlineHome /> },
    { id: "business", route: "/menu", label: "Menu", icon: <MdFastfood /> },
    { id: "ny", route: "/resto", label: "Restourant", icon: <MdFoodBank /> },
    { id: "arts", route: "/", label: "Cart", icon: <MdOutlineShoppingCart /> },
];

const Navbar = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <nav className='flex flex-col items-between gap-y-4 fixed h-max bottom-0 lg:sticky lg:top-0 mt-auto
        z-50 w-full'>
            <div className="flex items-center justify-evenly w-full xl:justify-center h-[80] xl:h-max py-4 bg-white/10 backdrop-blur-sm">
                {tabs.map((tab) => (
                    <Link
                        key={tab.id}
                        href={tab.route}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${activeTab === tab.id ? 'text-white' : 'hover:opacity-50'} 
                        relative rounded-full px-3 py-1.5 text-sm font-medium focus-visible:outline
                        transition`}
                    >
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-color-primary"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", duration: 0.6 }}
                            />
                        )}
                        <div className="relative flex items-center gap-2">
                            <span>{tab.icon}</span>
                            <span className="hidden lg:block">{tab.label}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;