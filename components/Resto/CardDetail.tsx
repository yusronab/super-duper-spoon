import Image from "next/image";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const CardDetail = ({ data }: { data: any }) => {
    return (
        <div className="flex w-full justify-between items-center">
            <div className="flex gap-x-2 items-center w-full">
                <Image
                    alt="Load image failed"
                    src={"/clear-sandwich.png"}
                    height={100}
                    width={100}
                    className="max-h-28 object-contain bg-slate-200 rounded-md"
                />
                <div>
                    <p className="text-sm">{data.name}</p>
                    <p>{data.price} / porsi</p>
                </div>
            </div>
            <div className="relative group">
                <AiOutlineMinusCircle className="absolute left-0 top-1/2 -translate-y-1/2 group-focus-within:text-color-primary" />
                <input
                    type="text"
                    value={data.qty}
                    required
                    className="px-6 py-2 bg-transparent border-b shadow-sm border-b-slate-300  placeholder-slate-400 focus:outline-none focus:border-b-color-primary sm:text-sm"
                />
                <AiOutlinePlusCircle className="absolute right-0 top-1/2 -translate-y-1/2 group-focus-within:text-color-primary" />
            </div>
        </div>
    );
};

export default CardDetail;