import { FcGoogle } from "react-icons/fc";

const ButtonGoogle = () => {
    return (
        <button className="w-2/3 py-2 border border-gray-300 rounded-full mx-auto bg-white">
            <div className="flex gap-1 items-center justify-center">
                <FcGoogle />
                <span className="text-gray-700">Masuk dengan Google</span>
            </div>
        </button>
    );
};

export default ButtonGoogle;