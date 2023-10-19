import Form from "@/components/Signin/Form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Signin'
}

const Page = () => {
    return (
        <div className="flex flex-col gap-4 px-8">
            <h1 className="font-bold text-2xl">Risol</h1>
            <p>Mudahnya reservasi tanpa perlu pergi mengantri</p>
            <Form />
            <Link
                href="/signup"
                className="transition-all duration-200 hover:underline hover:text-color-primary"
            >
                Belum punya akun?<span className="capitalize text-color-primary"> daftar </span>disini
            </Link>
        </div>
    );
};

export default Page;