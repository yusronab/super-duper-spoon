"use client";

import { useDetails } from "@/hooks/useDetails";
import { motion } from "framer-motion";
import { useState } from "react";

const SelectTable = ({ tables }: { tables: any[] }) => {
    const { setIsShow } = useDetails();
    const [active, setActive] = useState<number | null>(null);

    const handleClick = (tablesType: number) => {
        setActive(tablesType);
        setIsShow(Boolean(tablesType));
    };

    return (
        <div className="grid grid-cols-4 gap-12">
            {tables.map((tab, i) => (
                <button
                    key={i}
                    onClick={() => handleClick(tab.type)}
                    className={`${active === tab.type ? 'text-white bg-green-500' : 'hover:text-white hover:bg-green-500 border-2 border-slate-300 border-dashed hover:border-none'} relative p-3 text-sm rounded-md font-medium transition duration-300 text-color-ternary`}
                >
                    {active === tab.type && (
                        <motion.div
                            layoutId="outline"
                            className="absolute -inset-1 ring-4 ring-green-500 rounded-md"
                            transition={{ type: "spring", duration: 0.6 }}
                        />
                    )}
                    <div>
                        <p>Kapasitas meja : {tab.type} orang</p>
                        <p>{tab.kuota} meja tersisa</p>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default SelectTable;