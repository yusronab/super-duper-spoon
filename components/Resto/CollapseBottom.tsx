"use client";

import { rupiah } from "@/constants";
import { useDetails } from "@/hooks/useDetails";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiChevronUp } from "react-icons/bi"
import CardDetail from "./CardDetail";

const CollapseBottom = () => {
    const { isShow, detailData } = useDetails();
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [isExpand, setIsExpand] = useState<boolean>(false);

    return (
        <motion.div
            animate={{
                height: isShow ? '' : 0,
                paddingTop: isShow ? 8 : 0,
                paddingBottom: isShow ? 34 : 0,
            }}
            className="fixed bottom-0 left-0 right-0 bg-color-ternary/70 text-white px-[8%] rounded-t-3xl flex flex-col items-center backdrop-blur-md z-20"
        >
            <BiChevronUp
                size={32}
                className={`mb-2 cursor-pointer transition-all duration-300 ${isOpen ? '' : 'rotate-180'}`}
                onClick={() => setIsOpen(!isOpen)}
            />
            <motion.div
                animate={{
                    height: isOpen ? '' : 0,
                    marginTop: isOpen ? 16 : 0,
                }}
                className="flex flex-col gap-6 w-full overflow-hidden"
            >
                {isExpand && <motion.div
                    animate={{ height: isExpand ? '60vh' : 0 }}
                    className="flex flex-col w-full overflow-y-scroll gap-y-4 pr-4"
                >
                    <h1 className="font-bold text-xl">Detail Pemesanan</h1>
                    <p className="text-sm text-slate-200">Nama :</p>
                    <p className="font-bold">Eko Kurniawan Khanedy</p>
                    <p className="text-sm text-slate-200">Meja :</p>
                    <p>4 orang</p>
                    <h1 className="font-bold text-xl">Menu</h1>
                    {detailData.map((data, i) => (
                        <CardDetail key={i} data={data} />
                    ))}
                </motion.div>}

                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <span>Total pembayaran :</span>
                        <span className="text-2xl font-bold">{rupiah(0)}</span>
                    </div>

                    {isExpand ? (
                        <button className="bg-color-primary text-white border-none py-2 px-4 rounded-md">
                            Lanjutkan Pembayaran
                        </button>
                    ) : (
                        <button onClick={() => setIsExpand(true)} className="bg-color-primary py-2 px-4 rounded-md">
                            Lanjut Pemesanan
                            {detailData.length !== 0 && <span className="ml-2 px-2 py-[1.5px] rounded-full bg-white text-color-primary">{detailData.length}</span>}
                        </button>
                    )}
                </div>
            </motion.div>
        </motion.div >
    );
};

export default CollapseBottom;