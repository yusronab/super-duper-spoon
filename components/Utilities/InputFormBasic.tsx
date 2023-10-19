type InputFormBasicProps = {
    type: string;
    name: string;
    value: string;
    label: string;
    placeholder: string;
    onChange: (e: any) => void;
    inputIcon?: JSX.Element;
    invalidText?: string;
}

const InputFormBasic = ({
    type, name, label, value, placeholder, onChange, inputIcon, invalidText
}: InputFormBasicProps) => {
    return (
        <label className="block mb-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm
            font-medium text-slate-700 text-left capitalize">
                {label}
            </span>
            <div className="relative group">
                <input
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    required
                    onChange={onChange}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-color-primary
                    block w-full rounded-md sm:text-sm"
                />
                {inputIcon}
            </div>
            <span className="text-red-500 text-sm text-left block">{invalidText}</span>
        </label>
    );
};

export default InputFormBasic;