import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Page not found"
}

const Page = () => {
    return (
        <div className="min-h-screen w-full bg-color-secondary flex items-center justify-center">
            <Image
                src={"/clear-notfound.png"}
                alt="Load image fail"
                width={350}
                height={350}
                className="w-full max-h-64 object-contain"
            />
        </div>
    );
};

export default Page;