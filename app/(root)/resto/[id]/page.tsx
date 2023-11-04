import CollapseBottom from "@/components/Resto/CollapseBottom";
import ListMenu from "@/components/Resto/ListMenu";
import SelectTable from "@/components/Resto/SelectTable";
import { listResto } from "@/constants";
import Image from "next/image";
import { AiOutlineClockCircle, AiTwotonePhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const getDetailResto = async (id: string) => {
    const resto = listResto.find((item) => item.id === id);

    return resto;
};

const Page = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const resto = await getDetailResto(id);

    return (
        <div className="flex flex-col gap-12 text-color-ternary my-12 relative">
            <div className="grid grid-cols-2 gap-12">
                <Image
                    src={"/clear-imageholder.png"}
                    alt="Load image failed"
                    width={350}
                    height={350}
                    className="w-full object-contain bg-slate-300"
                />
                <div>
                    <p className="flex items-center gap-2"><AiOutlineClockCircle />10.00 - 22.00 , setiap hari</p>
                    <p className="font-bold text-3xl my-4">{resto?.name}</p>
                    <p className="flex items-center gap-2 mb-4"><AiTwotonePhone />{resto?.phone}</p>
                    <p className="text-color-primary flex items-center gap-2"><MdLocationOn />{resto?.address}</p>
                </div>
            </div>

            <div>
                <h1 className="font-bold text-3xl">Pilihan Meja</h1>
                <p className="mb-4">Sesuaikan kebutuhanmu untuk memilih meja yang tersedia</p>
                {resto?.avail && <SelectTable tables={resto?.avail} />}
            </div>

            <div>
                <h1 className="font-bold text-3xl">Menu di {resto?.name}</h1>
                <p className="mb-4">Sesuaikan kebutuhanmu untuk memilih meja yang tersedia</p>
                {resto?.list && <ListMenu menus={resto?.list} />}
            </div>

            <CollapseBottom />
        </div>
    );
};

export default Page;