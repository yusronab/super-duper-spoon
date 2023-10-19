"use client";

import { SyntheticEvent, useState } from "react";
import InputFormBasic from "../Utilities/InputFormBasic";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Form = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        console.log(data);
    };

    const iconPassword = <div className="absolute mr-2 right-0 top-1/2 transform -translate-y-1/2
    cursor-pointer text-slate-300 group-focus-within:text-black" onClick={handleShowPassword}>
        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
    </div>

    return (
        <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
        >
            <InputFormBasic
                label="email"
                name="email"
                type="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Ketik disini . . ."
            />
            <InputFormBasic
                label="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={data.password}
                onChange={handleChange}
                placeholder="Ketik disini . . ."
                inputIcon={iconPassword}
            />
            <button
                className="capitalize rounded-full w-2/3 bg-color-primary border-none font-bold duration-200
                text-white py-2 hover:ring-2 hover:ring-color-primary hover:bg-white transition-all
                hover:text-color-primary mt-4">
                masuk
            </button>
        </motion.form>
    );
};

export default Form;