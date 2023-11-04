"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface IDetailContext {
    detailData: any[];
    setDetailData: Dispatch<SetStateAction<any[]>>;
    isShow: boolean;
    setIsShow: Dispatch<SetStateAction<boolean>>;
};

const DetailContext = createContext<IDetailContext>({
    detailData: [],
    setDetailData: () => {},
    isShow: false,
    setIsShow: () => {},
});

export const DetailProvider = ({ children }: { children: React.ReactNode }) => {
    const [detailData, setDetailData] = useState<any[]>([]);
    const [isShow, setIsShow] = useState<boolean>(false);

    const context = {
        detailData,
        setDetailData,
        isShow,
        setIsShow,
    };

    return (
        <DetailContext.Provider value={context}>
            {children}
        </DetailContext.Provider>
    );
};

export const useDetails = () => useContext(DetailContext);