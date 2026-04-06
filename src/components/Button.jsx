export default function Button({ children, onClick, type = "button", variant = "primary", className = "" }) {

    const baseStyles = "mt-8 text-lg font-bold py-4 rounded-2xl transition-all active:scale-[0.98] w-full shadow-lg cursor-pointer";

    const variants = {
        primary: "bg-[#00C950] hover:bg-[#00b347] text-white shadow-[#00C950]/30",
        danger: "bg-red-500 hover:bg-red-600 text-white shadow-red-500/30",
        outline: "border-2 border-[#00C950] text-[#00C950] hover:bg-[#00C950]/5 shadow-none"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}