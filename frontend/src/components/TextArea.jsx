function TextArea({
                      label,
                      placeholder = "",
                      value,
                      onChange,
                      name,
                      rows = 5,
                      error,
                      disabled = false,
                      required = false,
                  }) {
    return (
        <div className="w-full">
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

            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                disabled={disabled}
                className={`
          w-full resize-y rounded-xl border
          bg-[#11111a]
          px-4 py-3
          text-sm leading-6 text-white
          placeholder:text-gray-600
          outline-none
          transition-all duration-200

          ${
                    error
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10"
                }

          disabled:cursor-not-allowed
          disabled:opacity-50
        `}
            />

            {error && (
                <p className="mt-2 text-xs text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
}

export default TextArea;