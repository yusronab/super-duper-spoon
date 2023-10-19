const ButtonGradient = ({ buttonText }: { buttonText: string }) => {
    return (
        <button type="submit" className="relative inline-flex items-center justify-center p-4 px-5 py-3
        overflow-hidden font-medium text-indigo-600 rounded-full group w-1/3">
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700
            bg-[#F9B572] rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700
            group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#99B080] rounded-full
                blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#748E63] rounded-full
                blur-md"></span>
            </span>
            <span className="relative text-white font-bold capitalize">{buttonText}</span>
        </button>
    );
};

export default ButtonGradient;