import { Loader2 } from "lucide-react";

function Button({
                    children,
                    variant = "primary",
                    size = "medium",
                    icon: Icon,
                    loading = false,
                    disabled = false,
                    type = "button",
                    onClick,
                    className = "",
                }) {
    const variants = {
        primary:
            "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-500/10",

        secondary:
            "border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10",

        ghost:
            "bg-transparent text-gray-400 hover:bg-white/5 hover:text-white",

        danger:
            "bg-red-500/10 text-red-400 hover:bg-red-500/20",
    };

    const sizes = {
        small: "px-3 py-1.5 text-xs rounded-lg",
        medium: "px-4 py-2.5 text-sm rounded-xl",
        large: "px-5 py-3 text-base rounded-xl",
    };

    const isDisabled = disabled || loading;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={`
        inline-flex
        items-center
        justify-center
        gap-2
        font-medium
        transition-all
        duration-200
        active:scale-95
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
        >
            {loading ? (
                <>
                    <Loader2
                        size={16}
                        className="animate-spin"
                    />

                    <span>Loading...</span>
                </>
            ) : (
                <>
                    {Icon && <Icon size={16} />}

                    <span>{children}</span>
                </>
            )}
        </button>
    );
}

export default Button;