import ButtonGoogle from "@/components/Signin/ButtonGoogle";
import Form from "@/components/Signin/Form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Signin'
}

const Page = () => {
    return (
        <div className="flex flex-col gap-4 px-8">
            <h1 className="font-bold text-2xl text-slate-700">Risol</h1>
            <p className="text-sm text-slate-700 px-[5%]">Mudahnya reservasi tanpa perlu pergi mengantri</p>
            <Form />
            <div className="w-full my-1 relative">
                <hr className="w-full h-px bg-gray-300 border-0 dark:bg-gray-700" />
                <span className="absolute text-slate-700 -translate-x-1/2 left-1/2 bg-color-accent px-2
                dark:text-white dark:bg-gray-900 -translate-y-1/2">atau</span>
            </div>
            <ButtonGoogle />
            <Link
                href="/signup"
                className="transition-all duration-200 hover:underline hover:text-color-primary text-sm
                text-slate-700"
            >
                Belum punya akun?
                <span className="capitalize text-color-primary font-bold"> daftar </span>
                disini
            </Link>
        </div>
    );
};

export default Page;