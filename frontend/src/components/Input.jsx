import { AlertCircle } from "lucide-react";

function Input({
                   label,
                   placeholder = "",
                   value,
                   onChange,
                   type = "text",
                   name,
                   error,
                   disabled = false,
                   required = false,
               }) {
    return (
        <div className="w-full">
            {/* Label */}
            {label && (
                <label
                    htmlFor={name}
                    className="mb-2 block text-sm font-medium text-gray-300"
                >
                    {label}

                    {required && (
                        <span className="ml-1 text-pink-400">
              *
            </span>
                    )}
                </label>
            )}

            {/* Input */}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`
          w-full
          rounded-xl
          border
          bg-[#11111a]
          px-4
          py-3
          text-sm
          text-white
          placeholder:text-gray-600
          outline-none
          transition-all
          duration-200

          ${
                    error
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10"
                }

          disabled:cursor-not-allowed
          disabled:opacity-50
        `}
            />

            {/* Error */}
            {error && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
                    <AlertCircle size={14} />
                    <span>{error}</span>
                </div>
            )}
        </div>
    );
}

export default Input;