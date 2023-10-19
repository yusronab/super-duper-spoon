import Form from "@/components/Signup/Form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Signup'
}

const Page = () => {
    return (
        <div className="flex flex-col gap-4 px-8">
            <h1 className="font-bold text-2xl capitalize text-left">buat akun baru</h1>
            <Form />
            <Link
                href="/signin"
                className="transition-all duration-200 hover:underline hover:text-color-primary"
            >
                Sudah punya akun?<span className="capitalize text-color-primary"> masuk </span>disini
            </Link>
        </div>
    );
};

export default Page;