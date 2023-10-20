import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Forgot password"
}

const Page = () => {
    return (
        <div className="flex flex-col gap-4 px-8">
            <h1 className="font-bold text-2xl text-slate-700 text-left">Lupa Password</h1>
            <p className="text-slate-700 text-sm text-left">
                kami akan mengirim pesan konfirmasi ke email anda, untuk melakukan reset password
            </p>
            <form>
                <label className="block mb-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm
                    font-medium text-slate-700 text-left capitalize">
                        email
                    </span>
                    <div className="relative group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Masukkan email . . ."
                            required
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none focus:border-color-primary
                            block w-full rounded-md sm:text-sm"
                        />
                    </div>
                </label>
                <button
                    className="capitalize rounded-full w-2/3 bg-color-primary border-none font-bold
                    duration-200 text-white py-2 hover:ring-2 hover:ring-color-primary hover:bg-white
                    transition-all hover:text-color-primary">
                    kirim
                </button>
            </form>
            <Link
                href="/signin"
                className="transition-all duration-200 hover:underline hover:text-color-primary text-sm
                text-slate-700"
            >
                Sudah punya akun?
                <span className="capitalize text-color-primary font-bold"> masuk </span>
                disini
            </Link>
        </div>
    );
};

export default Page;